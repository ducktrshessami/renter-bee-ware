import React, { useState } from "react";
import API from "../../utils/API";
import ResultsCard from "../../components/ResultsCard";

function getData() {
  return {
    streetAddress: document.getElementById("street-address").value.trim(),
    aptNumber: document.getElementById("apt-number").value.trim(),
    city: document.getElementById("city").value.trim(),
    state: document.getElementById("state").value.trim(),
    zipCode: document.getElementById("zip-code").value.trim(),
  };
}

function parseResult(resultData) {
  let image;
  if (resultData.photos) {
    image = "/api/photo/" + resultData.photos[0].photo_reference;
  }
  return <ResultsCard key={resultData.place_id} placeId={resultData.place_id} name={resultData.name} photo={image} address={resultData.formatted_address} />
}

function SearchApt() {
  const [searchResults, setSearchResults] = useState([]);
  function search(event) {
    const searchData = getData();
    event.preventDefault();
    API.findPlaceFromText(
      `${searchData.streetAddress}, ${searchData.aptNumber}, ${searchData.city}, ${searchData.state}, ${searchData.zipCode}`
    )
      .then((res) => res.candidates)
      .then(setSearchResults);
  }
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
            <div className="input-field col s4">
              <input id="city" type="text" />
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s4">
              <input id="state" type="text" />
              <label htmlFor="state">State</label>
            </div>
            <div className="input-field col s4">
              <input id="zip-code" type="text" />
              <label htmlFor="zip-code">Zip Code</label>
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Search
            <i className="material-icons right"></i>
          </button>
        </form>
      </div>
      <div className="row">
        <div className="col s12">{searchResults.map(parseResult)}</div>
      </div>
    </div>
  );
}

export default SearchApt;
