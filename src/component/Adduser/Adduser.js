import React, { useState, useContext } from 'react';
import "./Adduser.css"
import { StateContext } from '../../container/Contexts/ContextState';
import randID from '../../container/randID';

export default function Adduser(props){
    const [firstName, setFirstName] = useState('');
    const [lastName, setlastName] = useState('')
    const [age, setAge] = useState('')
    const [occupation, setOccupation] = useState('')
	const [about, setAbout] = useState('')
	const [userNameValid, setuserNamevalid] = useState(false)
	const {system, eventHandler, adduser, users} =  useContext(StateContext)
	const {showOverlay} = system
	const randomId = randID()
	
	const handleSubmit = (e)=>{
		e.preventDefault();
		adduser(firstName, lastName, age, occupation, about, randomId);
		
		// Reset the fields
		setFirstName('')
		setlastName('')  
		setAge('') 
		setOccupation('')
		setAbout('')   
		localStorage.setItem("users", JSON.stringify([{firstName, lastName, age, occupation, randomId }, ...users]))                        
	}

    return(
			<div>
			{ showOverlay &&
				<div>
					<div name="showOverlay" onClick={eventHandler} className="absolute full-width overlay"></div>
					<div className="relative white padded-20 segment">
					<span name="showOverlay" onClick={eventHandler} className=" absolute top-0 right-0 close">&times;</span>
						<h2 className="grey-t">Add new user</h2>
						<div className="divider"></div><br />
						<form onSubmit={handleSubmit}>
							<div className="fields">
								<div className="field">
									<label>First name</label><br />
									{userNameValid && <span className='red-t'>Username is already taken, please try another</span>}
									<input  required
										onChange={(e)=>{
											const {value} = e.target
											setFirstName(value);
											if(users.length){
												users.forEach(user=>{
													if(value === user.firstName){
														setuserNamevalid(true);
														setTimeout(()=>{
															setuserNamevalid(false)
														}, 5000)
													}
												})
											}
										}} 
										className="form-fix" 
										type="text" 
										name="firstName" 
										value={firstName} 
										placeholder="First name" 
									/>
								</div>
								<div className="field">
								<label>Last name</label>
									<input required onChange={(e)=>{setlastName(e.target.value)}} className="form-fix" type="text" name="lastName" value={lastName} placeholder="First name" />
								</div>
							</div>
							<div className="no-wrap grid fields">
								<div className="field">
								<label>Age</label>
									<input required onChange={(e)=>{setAge(e.target.value)}} className="form-fix" type="text" name="age" value={age} placeholder="Age" />
								</div>
								<div className="field">
								<label>Occupation</label>
									<input required onChange={(e)=>{setOccupation(e.target.value)}} className="form-fix" type="text" name="occupation" value={occupation} placeholder="Occupation" />
								</div>
							</div>
							<div className="full-width ">
							<label>Description</label>
								<textarea required className="full-width form-fix" rows="4" onChange={(e)=>{setAbout(e.target.value)}} value={about} placeholder="Description"  />
							</div>
							<button disabled={userNameValid} onClick={eventHandler} name="delayOverlay" className="full-width padded-20 red ">Save new user</button>
						</form>
					</div>
				</div>
			}
		</div>
												       
    )
}