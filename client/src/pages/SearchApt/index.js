import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import ResultsCard from "../../components/ResultsCard";
import M from "materialize-css";
import StateSelector from "../../components/StateSelector";


function SearchApt() {
  const history = useHistory();
  const [searchResults, setSearchResults] = useState([]);
  const [aptNumber, setAptNumber] = useState(null);

  function search(event) {
    event.preventDefault();
    const searchData = {
      streetAddress: event.target["street-address"].value.trim(),
      aptNumber: event.target["apt-number"].value.trim(),
      city: event.target["city"].value.trim(),
      state: event.target["state"].value.trim(),
      zipCode: event.target["zip-code"].value.trim(),
    };
    API.findPlaceFromText(
      `${searchData.streetAddress}, #${aptNumber}, ${searchData.city}, ${searchData.state}, ${searchData.zipCode}`
    )
      .then((res) => res.candidates)
      .then(setSearchResults);
  }

  function parseResult(resultData) {
    let image;
    if (resultData.photos) {
      image = API.photoUrl(resultData.photos[0].photo_reference);
    }
    return <ResultsCard key={resultData.place_id} placeId={resultData.place_id} name={resultData.name} photo={image} address={resultData.formatted_address} aptNumber={aptNumber} history={history} />
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
                <input id="apt-number" type="number" className="validate" onChange={event => setAptNumber(event.target.value)} />
                <label htmlFor="apt-number">Apt/Unit Number</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="city" type="text" className="validate" />
                <label htmlFor="city">City</label>
              </div>
              <div className="input-field col s3">
                <StateSelector id="state" />
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
