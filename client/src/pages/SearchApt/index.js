import React, { useState } from "react";
import API from "../../utils/API";
import ResultsCard from "../../components/ResultsCard";
import M from "materialize-css";
import StateSelector from "../../components/StateSelector";


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
    image = API.photoUrl(resultData.photos[0].photo_reference);
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

  var stateSelector = document.querySelectorAll('.select');
  var stateInstances = M.FormSelect.init(stateSelector);

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
              <StateSelector />
              </div>
              <div className="input-field col s3">
                <input id="zip-code" type="text" className="validate" />
                <label htmlFor="zip-code">Zip Code</label>
              </div>
            </div>
            <div className="row">
              <button type="submit" className="waves-effect waves-light btn-large" name="action"> Search <i class="material-icons right"></i></button>
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
