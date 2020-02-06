import React, { useContext } from 'react';
import "./users.css"
import Userlist from '../Userlist/Userslist';
import { StateContext } from '../../container/Contexts/ContextState'
import TopBarNavigation from '../WindowNavigation/NavigationBar';


export function Users(){
    const {users} = useContext(StateContext)
    return(
        <div>
            <TopBarNavigation pageTitle={users.length > 0 ? "All registered users" : "Users list empty!"}/>
            <Userlist users={users}/>
        </div>
    )
}
export default Users