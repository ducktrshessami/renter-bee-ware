import React from 'react';

function Footer() {
  return(
    <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Renter Bee-Ware</h5>
          <a className="white-text" href="https://github.com/ducktrshessami/renter-bee-ware" target="_blank" rel="noreferrer">GitHub Repository</a>
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Team Members</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="https://github.com/ducktrshessami" target="_blank" rel="noreferrer">Josh Wee</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/ethomas22" target="_blank" rel="noreferrer">Emily Thomas</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/dillonhoban" target="_blank" rel="noreferrer">Dillon Hoban</a></li>
            <li><a className="grey-text text-lighten-3" href="https://github.com/ndpenaloza" target="_blank" rel="noreferrer">Nick D. Penaloza</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container center-align">
      Renter Bee-Ware © 2021
      </div>
    </div>
  </footer>
  )

}

export default Footer;