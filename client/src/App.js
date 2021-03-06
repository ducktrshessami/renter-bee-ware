import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from "./logo.svg";
import "./App.css";
import Index from './pages/Index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SearchApt from './pages/SearchApt';
import Member from './pages/Member';
import WriteReview from './pages/WriteReview';
import EditReview from './pages/EditReview';
import Results from './pages/Results';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <Route exact path='/' component={Index}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/sign-up' component={Signup}/>
            <Route exact path='/search-apt' component={SearchApt}/>
            <Route exact path='/member' component={Member}/>
            <Route exact path='/write-review' component={WriteReview}/>
            <Route exact path='/edit-review' component={EditReview}/>
            <Route exact path='results' component={Results}/> 
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
