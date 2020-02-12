import React, { createContext, useState } from "react";

export const StateContext = createContext();

function ContextStateProvider(props) {
	const [myState, setMyState] = useState([
		{ firstName: "Iyobosa", 
			lastName: "Noah", 
			age: 34, 
			occupation: "Banker", 
			color: "blue", 
			id: 2 
		},
		{
			firstName: "John",
			lastName: "Doe",
			age: 26,
			occupation: "Software Developer",
			color: "orange",
			id: 3
		},
		{
			firstName: "Michael",
			lastName: "Okpara",
			age: 48,
			occupation: "Business man",
			color: "purple",
			id: 4,
			description: "Hi, i am okpara"
		},
		{
			firstName: "Jefferson",
			lastName: "Iyobosa",
			age: 24,
			occupation: "Developer",
			color: "red",
			id: 1,
			description:
				"Jefferson is a frontend developer. He uses HTML, CSS and Javascript to carrout his tasks"
		}
	]);

	const [system, setSystem] = useState({
		showOverlay: false,
		saveUser: false,
		messageContent: "",
		setMessage: content => {
			setSystem({ ...system, messageContent: content });
		}
	});

	// handleClick events
	const handleClick = event => {
		function getName(name) {
			return event.target.getAttribute(name);
		}

		// Force name of element
		const elementName = getName("name");

		// Handle button events
		if (elementName === "showOverlay") {
			setSystem(prevState => ({ ...system, [elementName]: !prevState[elementName] }));
		}
		// Delay the hiding of the modal to create new user
		else if (elementName === "delayOverlay") {
			setTimeout(() => {
				setSystem(prevState => ({ ...system, showOverlay: !prevState["showOverlay"] }));
			}, 100);
		}
	};

	// Add new user
	const adduser = (firstName, lastName, age, occupation, description, id) => {
		setMyState([{ firstName, lastName, age, occupation, description, id }, ...myState]);
	}
	// Delete user
	const deleteUser = user => {
		if (myState.length === 1) {
			setSystem({ ...system, messageContent: `You must have at least 1 user in the list` });
		} else {
			let newState = myState.filter(item => {
				return item !== user;
			});
			setMyState(newState);
			setSystem({ ...system, messageContent: `User ${user.firstName} deleted!` });
		}
	};

	// Edit user
	const editUser = updated => {
		for (var index in myState) {
			if (myState[index].id == updated.id) {
				myState[index] = updated;
				break;
			}
		}
	};

	const getCurrentUser = id => {
		let user = myState.filter(u => u.id.toString() === id);
		return user[0];
	};

	// Clear the message log
	if (system.messageContent !== "") {
		setTimeout(() => {
			setSystem({ ...system, messageContent: "" });
		}, 2500);
	}

	// return the context

	return (
		<StateContext.Provider
			value={{
				users: myState,
				system: { ...system },
				eventHandler: handleClick,
				adduser,
				deleteUser,
				editUser,
				getCurrentUser,
				setMyState
			}}
		>
			{props.children}
		</StateContext.Provider>
	);
}

export default ContextStateProvider;
