import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Index from './pages/Index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SearchApt from './pages/SearchApt';
import Member from './pages/Member';
import WriteReview from './pages/WriteReview';
import EditReview from './pages/EditReview';
import Results from './pages/Results';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
