import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

function SearchApt() {
  const history = useHistory();
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

  function parseResult(resultData) {
    let image;
    if (resultData.photos) {
      image = API.photoUrl(resultData.photos[0].photo_reference);
    }
    return <ResultsCard key={resultData.place_id} placeId={resultData.place_id} name={resultData.name} photo={image} address={resultData.formatted_address} history={history} />
  }

  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={search}>
            <h2 className="center-align">Search Apartment</h2>
            <div className="row">
              <div className="input-field col s6">
                <input id="street-address" type="text" className="validate" />
                <label htmlFor="street-address">Street Address</label>
              </div>
              <div className="input-field col s6">
                <input id="apt-number" type="text" className="validate" />
                <label htmlFor="apt-number">Apt/Unit Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="city" type="text" className="validate" />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s3">
                <input id="state" type="text" className="validate" />
                <label htmlFor="state">State</label>
              </div>
              <div className="input-field col s3">
                <input id="zip-code" type="text" className="validate" />
                <label htmlFor="zip-code">Zip Code</label>
              </div>
            </div>
            <div className="row">
              <button type="submit" className="waves-effect waves-light btn-large" name="action">Search</button>
            </div>
          </form>
        </div>
        <div className="row">
          <div className="col s12">{searchResults.map(parseResult)}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchApt;
