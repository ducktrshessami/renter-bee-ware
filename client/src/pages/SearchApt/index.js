import React, { Component } from "react";
import API from "../../utils/API";


function getData() {
  return {
    streetAddress: document.getElementById("street-address").value.trim(),
    aptNumber: document.getElementById("apt-number").value.trim(),
    city: document.getElementById("city").value.trim(),
    state: document.getElementById("state").value.trim(),
    zipCode: document.getElementById("zip-code").value.trim(),
  };
}
function search(event) {
  const searchData = getData();
  event.preventDefault();
    API.findPlaceFromText(`${searchData.streetAddress}, ${seachData.aptNumber}, ${searchData.city}, ${searchData.state}, ${searchData.zipCode}`)
}


function SearchApt() {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={search}>
          <h2 className="center-align">Search Apartment</h2>
          <div className="row">
            <div className="input-field col s6">
              <input id="street-address" type="text" />
              <label htmlFor="street-address">Street Address</label>
            </div>
            <div className="input-field col s6">
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
              <label for="state">State</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="zip-code" type="text" />
              <label htmlFor="zip-code">Zip Code</label>
            </div>
          </div>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Search
            <i class="material-icons right"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchApt;
