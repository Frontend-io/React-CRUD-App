import React from 'react';
import "./Userlist.css";
import {Link} from "react-router-dom"

export default function Userlist(props){
    const List = (props) =>(
        <div className="grid apart align-c padded-20, margin-10 white mat shadow user">
            <div className="padded-5 grid align-c">
                {props.userDetails.firstName &&
                    <h3  styles={{ marginRight: 10, width: 30}} className="initial blue padded-10">{props.userDetails.firstName[0]}</h3>
                }
                <div className="col grid ">
                    <h4 className="no-margin no-padding">{props.userDetails.firstName} {props.userDetails.lastName}</h4>
                    <span className="no-margin">{props.userDetails.occupation}</span>
                </div>
            </div>
            <h3 className="padded-5">{props.userDetails.age}</h3>
        </div>
    )
   return(
       (props.users.length) ?
            props.users.map(item =>(
                <Link to={`user/${item.id}`} key={item.id} >
                    <List userDetails={item} />
                </Link>
        ))
        :
        null
   )
}