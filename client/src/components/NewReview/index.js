import React, { Component } from 'react';
import M from "materialize-css";
import API from "../../utils/API";
import StarRating from "../StarRating";

function getData() {
  return {
    streetAddress: document.getElementById("street-address").value.trim(),
    aptNumber: document.getElementById("apt-number").value.trim(),
    city: document.getElementById("city").value.trim(),
    state: document.getElementById("state").value.trim(),
    zipCode: document.getElementById("zip-code").value.trim(),
    startDate: document.getElementById("start-date").value.trim(),
    endDate: document.getElementById("end-date").value.trim(),
    stars: document.getElementById("stars").value.trim(),
    message: document.getElementById("review").value.trim()
  };
}

function validate({ streetAddress, aptNumber, city, state, zipCode, startDate, endDate, stars }) {
  return Boolean(streetAddress.match(/^[0-9]+ .+/i) && (aptNumber ? !Number.isNan(Number(aptNumber)) : true) && city && state && !Number.isNan(Number(zipCode)) && startDate && endDate && !Number.isNaN(Number(stars)));
}

function submit(event) {
  let reviewData = getData();
  event.preventDefault();
  if (validate(reviewData)) {
    API.findPlaceFromText(`${reviewData.streetAddress}, ${reviewData.city}, ${reviewData.state} ${reviewData.zipCode}`)
      .then(res => res.candidates[0])
      .then(place => API.newReview({ ...reviewData, ...place }))
      .then(() => {
        window.location.pathname = "/";
      })
      .catch(console.error);
  }
}

class NewReview extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
    this.handleQuery();
  };
  // componentDidMount() {
  //   var element = ReactDOM.findDOMNode(this.refs.dropdown)
  // };

  // var states = [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ];

  handleQuery() {
    let query = new URLSearchParams(window.location.search);
    if (query.get("street")) {
      document.getElementById("street-address").value = query.get("street");
    }
    if (query.get("city")) {
      document.getElementById("city").value = query.get("city");
    }
    if (query.get("state")) {
      document.getElementById("state").value = query.get("state");
    }
    if (query.get("zip")) {
      document.getElementById("zip-code").value = query.get("zip");
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={submit}>
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
                <div className="input-field col s3">
                  <input id="start-date" type="text" className="datepicker validate" />
                  <label htmlFor="dates-occupied">Start Date</label>
                </div>
                <div className="input-field col s3">
                  <input id="end-date" type="text" className="datepicker validate" />
                  <label htmlFor="dates-occupied">End Date</label>
                </div>
                <div className="input-field col s6">
                  <StarRating></StarRating>
                  {/* <input id="stars" type="text" className="StarRating validate" /> */}
                  <label htmlFor="stars">Stars (1-5)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="review" className="materialize-textarea validate"></textarea>
                  <label htmlFor="review">Review</label>
                </div>
              </div>
              <div className="row">
                <button type="submit" className="waves-effect waves-light btn-large">Submit Review</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewReview;