import React, { Component } from "react";
import API from "client/src/utils/API";





function SearchApt() {
  return (
    <div className="container">
      <div class="row">
        <form class="col s12">
          <h2 className="center-align">Search Apartment</h2>
          <div className="row">
            <div className="input-field col s6">
              <input id="street-address" type="text" />
              <label for="street-address">Street Address</label>
            </div>
            <div class="input-field col s6">
              <input id="apt-number" type="text" />
              <label for="apt-number">Apt Number</label>
            </div>
          </div>
          <div className="row">
            <div class="input-field col s6">
              <input id="city" type="text" />
              <label for="city">City</label>
            </div>
            <div className="input-field col s6">
              <input id="state" type="text" />
              <label for="state">State</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="zip-code" type="text" />
              <label for="zip-code">Zip Code</label>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light"
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
