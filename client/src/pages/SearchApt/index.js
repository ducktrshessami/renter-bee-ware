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
    API.findPlaceFromText(`${searchData.streetAddress}, ${searchData.aptNumber}, ${searchData.city}, ${searchData.state}, ${searchData.zipCode}`)
}


function SearchApt() {
  return (
    <div className="container">
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={search}>
          <h2 className="center-align">Search Apartment</h2>
          <div className="row">
            <div className="input-field col s6">
              <input id="street-address" type="text" className="validate"/>
              <label htmlFor="street-address">Street Address</label>
            </div>
            <div className="input-field col s6">
              <input id="apt-number" type="text" className="validate"/>
              <label htmlFor="apt-number">Apt/Unit Number</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="city" type="text" className="validate"/>
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s3">
              <input id="state" type="text" className="validate"/>
              <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s3">
              <input id="zip-code" type="text" className="validate"/>
              <label htmlFor="zip-code">Zip Code</label>
            </div>
          </div>
          <div className="row">
            <button type="submit" className="waves-effect waves-light btn-large" name="action"> Search <i class="material-icons right"></i></button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default SearchApt;
