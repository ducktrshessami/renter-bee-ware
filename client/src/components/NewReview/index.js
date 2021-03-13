import React, { Component } from 'react'; 
import M from "materialize-css";

class NewReview extends Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  };

  render() {
    return(
      <div>
        <div className='container'>
          <div className="row">
            <form className="col s12">
              <h2 className="center-align">New Review</h2>
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
                <div className="input-field col s3">
                <input type="text" className="datepicker"/>
                  <label htmlFor="dates-occupied">Start Date</label>
                </div>
                <div className="input-field col s3">
                <input type="text" className="datepicker"/>
                  <label htmlFor="dates-occupied">End Date</label>
                </div>
                <div className="input-field col s6">
                  <input id="stars" type="text" className="validate"/>
                  <label htmlFor="stars">Stars (1-5)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="review" className="materialize-textarea"></textarea>
                  <label htmlFor="review">Review</label>
                </div>
              </div>
              <div className="row">
                <a href="/" className="waves-effect waves-light btn-large">Submit Review</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default NewReview;