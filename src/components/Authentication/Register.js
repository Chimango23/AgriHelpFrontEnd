import React, { Component, useState, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContext'
import { MyProvider } from '../../contexts/MyProvider'
import axios from "axios";
import './register.css';
import Login from './Login';

const API_URL = 'http://127.0.0.1:8000/registered/';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      address: "",
      password: "",
      username: "",
      confirmedPass: "", //password for confirm inout
      passEror: "", //password error message
      status: 0, // HTTP status for POST method
    }
  }

  //registering details to react state 
  handleRegister = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    this.setState({[inputName]: inputValue});
  }
 

  registerFarmer = (event) => {
    event.preventDefault();

    // confirming password 
    if (this.state.password != this.state.confirmedPass) {
      this.setState({passEror: "passwords are different"});
      return;
    }
    else {
      this.setState({passEror: " "});
    }

    //sending data to backend api with POST method
    axios.post(API_URL, {fname: this.state.fname, lname: this.state.lname,
       email: this.state.email, address: this.state.address, username: this.state.username,
      password: this.state.password})
      .then((response) => {
        this.setState({status: response.status});
        console.log(response.status);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  render() {
    const { isRegistred, registered } = this.context;
    if (this.state.status === 201) {
      return (
        <div>
          <Login />
        </div>
      )
    }
    else {
      return (
        <div>
          <div className="form" onSubmit={this.registerFarmer}>
            <form className="regform">
              <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="First Name" name="fname" required  onChange={this.handleRegister} />
                    </div>
                      <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" name="lname"required onChange={this.handleRegister} />
                      </div> 
                  
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="Username" name="username" required onChange={this.handleRegister} />
                    </div>
                  
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" name="email" required onChange={this.handleRegister} />
                      </div>
                </div>
                <div className="col-md-6">
                      <div className="form-group">
                        <label>Address</label>
                        <input type="text" className="form-control" placeholder="Address" name="address" required onChange={this.handleRegister} />
                      </div> 
                
                    <div className="form-group">
                      <label>Password:</label>
                      <input type="password" className="form-control" placeholder="Enter password" name="password" required onChange={this.handleRegister} />
                    </div>
          
                    <div className="form-group">
                      <label>Confirm Password:</label>
                      <input type="password" className="form-control" placeholder="Enter password" name="confirmedPass" required onChange={this.handleRegister} />
                      <p style={{color:"red"}}>{this.state.passEror}</p>
                    </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      )

    }
    
  }
}

Register.contextType = LoginContext;

export default Register;