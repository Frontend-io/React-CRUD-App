import React, { useContext } from 'react'
import { StateContext } from '../../container/Contexts/ContextState';


export default function Header(props){  
    const {eventHandler} = useContext(StateContext) 

    return(
        <div style={{marginBottom: 30, borderBottom: "1.5px solid #ddd" }} className="grid apart white padded-20">
            <h4>Admin</h4>
            <button onClick={eventHandler} name="showOverlay"  className="mat shadow red">New User</button>
        </div>
    )
}