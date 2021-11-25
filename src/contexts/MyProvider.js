import { LoginContext } from "./LoginContext";

import React, { Component } from 'react'

export default class MyProvider extends Component {
    state = {
        isLoggedIn: 'no',
    }

    logIn = () => {
        this.setState({isLoggedIn: 'yes'});
    }

    logOut = () => {
        this.setState({isLoggedIn: 'no'});
    }

    render() {
        const { isLoggedIn } = this.state;
        const { logIn } = this;
        const { logOut } = this;
        return (
            <LoginContext.Provider value={{
                isLoggedIn,
                logIn,
                logOut,
            }}> 
                {this.props.children}
            </LoginContext.Provider>
        )
    }
}
