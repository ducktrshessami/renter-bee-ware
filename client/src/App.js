import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Index from './pages/Index';
import Logout from "./pages/Logout";
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
    authenticated: true,
    refreshNavAuth: () => this.refreshAuthState()
  }

  componentDidMount() {
    this.refreshAuthState();
  }

  refreshAuthState() {
    return API.getUserData()
      .then(data => this.setState({
        ...this.state,
        authenticated: Boolean(data && Object.keys(data).length)
      }))
      .catch(console.error);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar authenticated={this.state.authenticated} />
          <Switch>
            <Route exact path='/' ><Index refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path='/login' ><Login refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path='/signup' ><SignUp refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path='/search-apt' ><SearchApt refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path='/member' ><Member refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path='/write-review' ><WriteReview refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path='/edit-review' ><EditReview refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path='/results' ><Results refreshNavAuth={this.state.refreshNavAuth} /></Route>
            <Route exact path="/logout"><Logout refreshNavAuth={this.state.refreshNavAuth} /></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
