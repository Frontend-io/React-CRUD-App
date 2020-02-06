import React from 'react'
import { AuthContext } from '../../container/Contexts/authContext';
import {Link} from "react-router-dom"


export default function Auth(props){
    
    return(
        <AuthContext.Consumer>{(context)=>{
            const {isLoggedin, handleAuth}  = context
            return(
                <div className="centered-text padded-20 white cetered grid col mat shadow">
                    <h3>
                        {!isLoggedin && "You are currently logged out, log in"}
                    </h3><br />
                   <Link name="isLoggedin"  onClick={handleAuth}  to={isLoggedin ? "/users" : "/" }>
                        <button className="full-width padded-20 blue" onClick={handleAuth}>Log in</button>
                   </Link>
                </div>
            )
        }}
        </AuthContext.Consumer>
    )
}