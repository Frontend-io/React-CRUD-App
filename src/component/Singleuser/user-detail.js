import React, { useContext } from 'react';
import "./user-detail.css"
import { StateContext } from '../../container/Contexts/ContextState';
import {Link} from "react-router-dom"
import TopBarNavigation from '../WindowNavigation/NavigationBar';


export default function UserDetail(props){
    const userId = props.match.params.id
    const {users, deleteUser} = useContext(StateContext)
   

    // Get the particular user from the link
    const ThatUser = (props)=>{
        return(
            props.users.map( user => {
                if( user.id == userId){
                    return (
                       <div className="white padded-20 mat shadow user" key={user.id}>
                           <h2> {user.firstName} {user.lastName}</h2>
                           <div className="grid">
                                <p>{user.occupation}</p> | &nbsp;
                                <p>{user.age}</p>
                           </div>
                           <p>{user.description}</p>
                           <div className='grid' >
                                <Link to={`${user.id}/edit`}>
                                    <button className='orange'>Edit user</button>
                                </Link>
                                <Link to="/">
                                <button 
                                    // Delete user
                                        onClick={
                                            ()=>{
                                                deleteUser(user);
                                            }
                                        } 
                                        className='red'
                                    >Delete user</button>
                                </Link>
                           </div>
                       </div>
                    )
                }
                return false
            })
        )
    } 
    
    return(
        <div>
            <TopBarNavigation pageTitle="User profile" history={props.history}/>
            <ThatUser userArray={users} users={users} />
        </div>
    )
}

