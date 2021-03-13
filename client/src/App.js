import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.css";
import Index from './pages/Index';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
import SearchApt from './pages/SearchApt';
// import Member from './pages/Member';
import WriteReview from './pages/WriteReview';
// import EditReview from './pages/EditReview';
import Results from './pages/Results';
import Footer from './components/Footer';
import "materialize-css/dist/css/materialize.min.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path='/' component={Index} />
            {/* <Route exact path='/login' component={Login}/> */}
            {/* <Route exact path='/sign-up' component={SignUp}/> */}
            <Route exact path='/search-apt' component={SearchApt} />
            {/* <Route exact path='/member' component={Member}/> */}
            <Route exact path='/write-review' component={WriteReview} />
            {/* <Route exact path='/edit-review' component={EditReview}/> */}
            <Route exact path='/results' component={Results} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
