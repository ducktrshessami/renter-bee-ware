import React, { Component } from 'react'; 
import Logo from "../../images/logo-text.png"
function Navbar() {
    return(
        <nav>
        <div class="nav-wrapper">
        <img id="logo" src={Logo} class="brand-logo center"></img>

          <a href="/" class="brand-logo center">
              <img id="logo" src={Logo} class="brand-logo center"></img>
          </a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>    )
}

export default Navbar;