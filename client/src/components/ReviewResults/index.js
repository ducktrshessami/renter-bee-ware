import React, { Component } from 'react';

class ReviewResults extends Component {
  render() {
    return(
      <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
              <span className="card-title">Address</span>
              <p>Dates Occupied:</p>
              <p>Stars: </p>
              <p>Review:</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewResults;