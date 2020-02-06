import React from 'react'

export const GoBack = (props)=>{
    return(
        <button className="blue" onClick={props.history.goBack}>Go back</button>
    )
}