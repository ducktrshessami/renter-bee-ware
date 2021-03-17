import React from "react";
import { Link } from "react-router-dom";
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
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
      <div role="button" data-target="sidenav" className="sidenav-trigger right hide-on-med-and-up"><i className="material-icons">menu</i></div>
    </nav>
    <Sidenav/>

    </header>
  )
}

export default Navbar;