import React, { Component } from "react";

function SearchApt() {
  return (
    <div className="container">
      <div class="row">
        <form class="col s12">
          <h2 className="center-align">Search Apartment</h2>
          <div className="row">
            <div className="input-field col s6">
              <input id="street-address" type="text" />
              <label htmlFor="street-address">Street Address</label>
            </div>
            <div class="input-field col s6">
              <input id="apt-number" type="text" />
              <label htmlFor="apt-number">Apt Number</label>
            </div>
          </div>
          <div className="row">
            <div class="input-field col s6">
              <input id="city" type="text" />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s6">
              <input id="state" type="text" />
              <label htmlFor="state">State</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="zip-code" type="text" />
              <label htmlFor="zip-code">Zip Code</label>
            </div>
          </div>
          <button
            className="btn waves-effect btn-large waves-light"
            type="submit"
            name="action"
          >
            Submit
            <i class="material-icons right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchApt;
