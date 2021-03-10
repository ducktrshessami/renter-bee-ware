import React, { Component } from 'react'; 

class NewReview extends Component {

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
                  <label for="street-address">Street Address</label>
                </div>
                <div className="input-field col s6">
                  <input id="apt-number" type="text" className="validate"/>
                  <label for="apt-number">Apt/Unit Number</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="city" type="text" className="validate"/>
                  <label for="city">City</label>
                </div>
                <div className="input-field col s3">
                  <input id="state" type="text" className="validate"/>
                  <label for="state">State</label>
                </div>
                <div className="input-field col s3">
                  <input id="zip-code" type="text" className="validate"/>
                  <label for="zip-code">Zip Code</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="dates-occupied" type="text" className="validate"/>
                  <label for="dates-occupied">Dates Occupied</label>
                </div>
                <div className="input-field col s6">
                  <input id="stars" type="text" className="validate"/>
                  <label for="stars">Stars (1-5)</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="review" className="materialize-textarea"></textarea>
                  <label for="review">Review</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

export default NewReview;