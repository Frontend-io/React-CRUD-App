import React, { useContext, useEffect } from 'react'
import "./Edit-user.css"
import { StateContext } from '../../container/Contexts/ContextState';
import TopBarNavigation from '../WindowNavigation/NavigationBar';

const EditUser = (props)=>{
    const userId = props.match.params.id
    const {users, eventHandler, editUser} = useContext(StateContext)
     // Get the particular user from the link
     const ThatUser = (props)=>{
        const {users, changeuserName} = props
        

        // Push the user outside to currentUser
        let currentUser ;
        const handleChange = (e)=>{
            e.persist();
            editUser(currentUser.id, e.target.value, e.target.name);
        }
       

        return(
            users.map( (user) => {
                if( user.id == userId){
                    currentUser = user;
                    return (
                       <form className="white padded-20 mat shadow user" key={user.id}>
                           <input 
                                name="firstName" 
                                onChange={
                                    handleChange
                                } 
                                value={user.firstName} 
                                placeholder='First name' 
                                className="form-fix"
                            />
                           <input 
                                name="lastName" 
                                onChange={
                                    handleChange
                                }  
                                value={user.lastName} 
                                placeholder='Last name' 
                                className="form-fix"
                            />
                           <input
                                 name="age" 
                                 onChange={
                                    handleChange
                                }  
                                value={user.age} 
                                placeholder='Age' 
                                className="form-fix"
                           />
                           <input 
                                 onChange={
                                    handleChange
                                }  
                                value={user.occupation} 
                                placeholder='Occupation' 
                                className="form-fix"
                           />
                           <textarea
                                 name="description" 
                                rows="4" 
                                onChange={
                                    handleChange
                                }  
                                value={user.description} 
                                placeholder='Description' 
                                className="form-fix"
                           />
                           <button onChange={changeuserName} name="saveEdit" className="full-width green padded-20"> Save Details</button>
                       </form>
                    )
                }
                return false
            })
        )
    } 
    return(
            <div>
                <TopBarNavigation pageTitle="Edit user details" history={props.history}/>
                <ThatUser changeuserName={eventHandler} users={users} />
            </div>
        )
}

export default EditUser