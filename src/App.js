import React, { Component } from 'react';
import AgriHelp from './components/AgriHelp';
import MyProvider from './contexts/MyProvider';
import { LoginContext } from './contexts/LoginContext';

class App extends Component {

  render() {
    return (
      <MyProvider>
        <AgriHelp />
      </MyProvider>
    )
  }
}

App.contextType = LoginContext; 


export default App;