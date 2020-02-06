import React from 'react'
import "./Message.css"


const Message = props =>{
    if(props.message){
        return(
            <div className="grid apart message">
                <h3>{props.message}</h3>
            </div>
        )
    }
    return true
}
export default Message