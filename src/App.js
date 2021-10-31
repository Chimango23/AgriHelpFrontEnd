import React, { Component } from 'react';
import axios from 'axios';
import Register from './components/Register';

class App extends Component {

  render() {
    return (
      <div>
        <Register />
      </div>
    )
  }
}

export default App;