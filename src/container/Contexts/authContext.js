import React, { createContext, Component } from 'react'

export const AuthContext = createContext();

export default class AuthContextProvider extends Component {
    state = {
        isLoggedin: false
    }

    handleAuth = (e)=>{
        this.setState({
           isLoggedin: true
        })
    }
    render() {
        return (
            <AuthContext.Provider value={{...this.state, handleAuth: this.handleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}
