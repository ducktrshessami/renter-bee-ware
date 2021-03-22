import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Logo from "../../images/logo-text.png";
import Sidenav from "../SideNav";
import "./Navbar.css";




function Navbar() {
  return (
    <header>
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <img id="logo" src={Logo} alt="logo" className="brand-logo center" />
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          <li><Link to="/member">My Account</Link></li>
          <li><Link to="/write-review">Write Review</Link></li>
        </ul>
        <div role="button" data-target="sidenav" className="sidenav-trigger right hide-on-large-only">
          <i className="material-icons">menu</i></div>
      </div>
    </nav>
    <Sidenav/>

    </header>
  )
}

export default Navbar;