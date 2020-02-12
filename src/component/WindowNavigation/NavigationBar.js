import React, { useContext } from 'react';
import "./TopbarNavigation.css" 
import { GoBack } from './goBack';
import Message from "../Logger/Message"
import { StateContext } from '../../container/Contexts/ContextState';


const TopBarNavigation = (props)=>{
    const {system} = useContext(StateContext)
    const {messageContent} = system
    
    return(
        <div className="grid apart mat shadow white padded-10 naviBar">
            <h2 className="grey-t">{props.pageTitle}</h2>
            {
                props.history && <GoBack history={props.history} />
            }
            {
                messageContent !== '' &&
                <Message  message={messageContent}/>
            }
        </div>
    )
}
export default TopBarNavigation