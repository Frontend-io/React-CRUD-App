import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Users from '../component/Users/Users';
import UserDetail from '../component/Singleuser/user-detail';
import EditUser from '../component/EditUser/Edit-user';


const RouterMain = (props)=>(
    <Switch>
        <Route exact path="/" component= {Users} />
        <Route exact path="/user/:id" component= {UserDetail} />
        <Route exact path="/user/:id/edit" component= {EditUser} />
        <Redirect path="/user" to="/" />
    </Switch>
)

export default RouterMain