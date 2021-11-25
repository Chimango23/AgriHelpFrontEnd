import React, { useState } from 'react';
import axios from "axios";
import './Login.css';

const API_URL = 'http://127.0.0.1:8000/registered/login/';

export default function Login(props) {

  const [authDetails, setAuthDetails] = useState({ username: '', password: ''});
  console.log(props.parentLog);

  //setting form details to react state 
  const handleLogForm = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;
    setAuthDetails(prevState => {
      return {...prevState, [inputName]: inputValue} 
    });
  }

  const toAgriHelp = (val) => {
    if (val === true) {
      props.parentLog(val);

    }
  }

  const loginFarmer = (event) => {
    event.preventDefault();
    console.log(authDetails);

    //sending data to backend api with POST method
    axios.post(API_URL, authDetails)
      .then((response) => {
        console.log(response.data);
        toAgriHelp(response.data);
      })
      .catch((error) => {
        console.log(error);
      });  

  }

  return (
    <div className='logform'>
      
      <div className="form">
          <form className="regform" onSubmit={loginFarmer}>      
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="Username" name="username" required
                onChange={handleLogForm} />
            </div>
          
            
            <div className="form-group">
              <label>Password:</label>
              <input type="password" className="form-control" placeholder="Enter password" name="password" required 
                onChange={handleLogForm} />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
      </div>
    </div>
  )
}


