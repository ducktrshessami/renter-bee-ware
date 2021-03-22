import React, { Component } from 'react';
import M from "materialize-css";
import API from "../../utils/API";
import StarRating from "../StarRating";
import StateSelector from "../StateSelector";

function validate({ streetAddress, aptNumber, city, state, zipCode, startDate, endDate, stars }) {
  return Boolean(streetAddress.match(/^[0-9]+ .+/i) && (aptNumber ? !Number.isNaN(Number(aptNumber)) : true) && city && state && !Number.isNaN(Number(zipCode)) && startDate && endDate && !Number.isNaN(Number(stars)));
}

class NewReview extends Component {
  state = { stars: 0 }

  componentDidMount() {
    var datePicker = document.querySelectorAll('.datepicker');
    var stateSelector = document.querySelectorAll('.select');
    M.Datepicker.init(datePicker);
    M.FormSelect.init(stateSelector);
    this.handleQuery();
  };

  handleQuery() {
    let query = new URLSearchParams(window.location.search);
    let street = document.getElementById("street-address");
    if (query.get("street")) {
      street.value = query.get("street");
      street.focus();
    }
    if (query.get("apt")) {
      let input = document.getElementById("apt-number");
      input.value = query.get("apt");
      input.focus();
    }
    if (query.get("city")) {
      let input = document.getElementById("city");
      input.value = query.get("city");
      input.focus();
    }
    if (query.get("state")) {
      let input = document.getElementById("state");
      input.value = query.get("state");
      input.focus();
    }
    if (query.get("zip")) {
      let input = document.getElementById("zip-code");
      input.value = query.get("zip");
      input.focus();
    }
    street.focus();
  }

  stars(rating) {
    this.setState({ stars: rating });
  }

  submit(event) {
    event.preventDefault();
    let reviewData = {
      streetAddress: event.target["street-address"].value.trim(),
      aptNumber: event.target["apt-number"].value.trim(),
      city: event.target["city"].value.trim(),
      state: event.target["state"].value.trim(),
      zipCode: event.target["zip-code"].value.trim(),
      startDate: event.target["start-date"].value.trim(),
      endDate: event.target["end-date"].value.trim(),
      stars: this.state.stars,
      message: event.target["review"].value.trim()
    };
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

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={event => this.submit(event)}>
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
                  <StateSelector id="state" />
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
                <div className="input-field col s6 row">
                  <StarRating onChange={rating => this.stars(rating)} />
                  <label htmlFor="stars">Stars</label>
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
