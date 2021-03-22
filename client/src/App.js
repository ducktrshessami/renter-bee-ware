import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import "./App.css";
import Index from './pages/Index';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SearchApt from './pages/SearchApt';
import Member from './pages/Member';
import WriteReview from './pages/WriteReview';
import EditReview from './pages/EditReview';
import Results from './pages/Results';
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import API from "./utils/API";
import "materialize-css/dist/css/materialize.min.css";

class App extends Component {
  state = {
    authenticated: false,
    userData: {},
    refreshAuth: this.refreshAuthState
  }

  componentDidMount() {
    this.refreshAuthState();
  }

  refreshAuthState() {
    API.getUserData()
      .then(data => {
        if (Object.keys(data).length) {
          this.setState({
            ...this.state,
            authenticated: true,
            userData: data
          });
        }
      })
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar authenticated={this.state.authenticated} />
          <Switch>
            <Route exact path='/' ><Index {...this.state} /></Route>
            {this.state.authenticated ? <Redirect to="/" /> : <Route exact path='/login' ><Login {...this.state} /></Route>}
            {this.state.authenticated ? <Redirect to="/" /> : <Route exact path='/signup' ><SignUp {...this.state} /></Route>}
            <Route exact path='/search-apt' ><SearchApt {...this.state} /></Route>
            {!this.state.authenticated ? <Redirect to="/login" /> : <Route exact path='/member' ><Member {...this.state} /></Route>}
            {!this.state.authenticated ? <Redirect to="/login" /> : <Route exact path='/write-review' ><WriteReview {...this.state} /></Route>}
            {!this.state.authenticated ? <Redirect to="/login" /> : <Route exact path='/edit-review' ><EditReview {...this.state} /></Route>}
            <Route exact path='/results' ><Results {...this.state} /></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
