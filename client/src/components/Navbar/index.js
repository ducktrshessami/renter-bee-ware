import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo-text.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <img id="logo" src={Logo} alt="logo" className="brand-logo center" />

        <Link to="/" className="brand-logo center">
          <img id="logo" src={Logo} alt="logo" className="brand-logo center" />
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
      </div>
    </nav>)
}

export default Navbar;