import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Logo from "../../images/logo-text.png";
import Sidenav from "../SideNav";
import "./Navbar.css";
import Login from '../../pages/Login';
import Member from '../../pages/Member';
import WriteReview from '../../pages/WriteReview';



function Navbar() {
  return (
    <header>
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <img id="logo" src={Logo} alt="logo" className="brand-logo center" />
        </Link>
        {/* <Router>
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/member' component={Member}/>
            <Route exact path='/write-review' component={WriteReview} />
          </Switch>
        </Router> */}
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="sass.html">Log In</a></li>
          <li><a href="badges.html">My Account</a></li>
          <li><a href="/write-review">Write Review</a></li>
          <li><a href="logout">Logout</a></li>
        </ul>
      </div>
      <div role="button" data-target="sidenav" className="sidenav-trigger right hide-on-med-and-up"><i className="material-icons">menu</i></div>
    </nav>
    <Sidenav/>

    </header>
  )
}

export default Navbar;