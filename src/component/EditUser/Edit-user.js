import React, { useContext, useState } from "react";
import "./Edit-user.css";
import { StateContext } from "../../container/Contexts/ContextState";
import TopBarNavigation from "../WindowNavigation/NavigationBar";

const EditUser = props => {
	const userId = props.match.params.id;
	const { getCurrentUser, editUser,system, setMyState} = useContext(StateContext);
	const {setMessage} = system;

	const user = getCurrentUser(userId);
	const [currUser, modifyUser] = useState({
		firstName: user.firstName,
		lastName: user.lastName,
		occupation: user.occupation,
		age: user.age,
		description: user.description,
		id: user.id
	});



	const handleChange = event => {
		const {name, value} = event.target;
		event.persist();
		modifyUser(currUser => ({ ...currUser, [name]: value }));
	};

	const print = e => {
		e.preventDefault();
		editUser(currUser);
		setMessage(`User updated successfully!`);		
	};
	// Get the particular user from the link

	return (
		<>
			<TopBarNavigation pageTitle="Edit user details" history={props.history} />
			<form className="white padded-20 mat shadow user" onSubmit={print}>
				<input
					type="text"
					name="firstName"
					onChange={handleChange}
					value={currUser.firstName}
					placeholder="First name"
					className="form-fix"
				/>
				<input
					type="text"
					name="lastName"
					onChange={handleChange}
					value={currUser.lastName}
					placeholder="Last name"
					className="form-fix"
				/>
				<input
					type="text"
					name="age"
					onChange={handleChange}
					value={currUser.age}
					placeholder="Age"
					className="form-fix"
				/>
				<input
					name="occupation"
					type="text"
					onChange={handleChange}
					value={currUser.occupation}
					placeholder="Occupation"
					className="form-fix"
				/>
				<textarea
					name="description"
					rows="4"
					onChange={handleChange}
					value={currUser.description}
					placeholder="Description"
					className="form-fix"
				/>
				<button name="saveEdit" type="submit" className="full-width green padded-20">
					Save Details
				</button>
			</form>
		</>
	);
};

export default EditUser;
