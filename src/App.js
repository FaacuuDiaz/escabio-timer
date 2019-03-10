import React, { Component } from 'react';

import './App.css';
//import {BrowserRouter as Router } from "react-router-dom"
import Navigation from './components/Navigation'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
       </div> 
    );
  }
}

export default App;
