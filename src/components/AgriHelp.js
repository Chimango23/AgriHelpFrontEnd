import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Register from './Authentication/Register.js';
import Login from './Authentication/Login.js';
import './AgriHelp.css';
import HomePage from './HomePage/HomePage.js';

export default class AgriHelp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
        }
    }

    //callback to be sent to child compontents to change the state of isLoggedIn
    handleLogInAndLogOut = (childData) => {
        this.setState({isLoggedIn: childData})
    }
    render() {

        //conditional to render for a logged user and non-logged user
        if (this.state.isLoggedIn === false) {
            return (
                <div>
                    <Router>
                        <nav className="navbar navbar-expand-sm bg-success navbar-dark">
                            <a className="navbar-brand " href="#">
                            <span className="text-warning">AgriHelp</span>
                            </a>
                            <ul className="navbar-nav justify-content-center">
                                <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Register</Link>
                                </li>
                                <li className="nav-item active">
                                <Link className="nav-link" to={'/login'}>Login</Link>
                                </li>  
                            </ul>
                        </nav>
                            <div className='background'> 
                                <Switch>
                                    <Route exact path='/' component={Register} /> 
                                    <Route path='/login'
                                        render={ (props) => (
                                            <Login {...props} parentLog={this.handleLogInAndLogOut} />
                                        )} />
                                </Switch>
                            </div>    
                    </Router>
            </div>
            );
        }
        else if (this.state.isLoggedIn === true) {
            return (
                <HomePage parentLog={this.handleLogInAndLogOut} />
            );
            
        }
    }

}
