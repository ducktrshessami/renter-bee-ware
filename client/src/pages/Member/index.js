import React from "react";

function Member() {
  return (
    <div className='container'>
    <div className='card'>
      <h3 className="left-align">Welcome, Stranger</h3>
    </div>
    <div className='row'>
      <div className='row'>
        <div className="col">
          <h5 className="center-align">Search Apartments, Write, Edit, and Delete Reviews Here.</h5>
        </div>
      </div>
    <div className="col l3">
      <div className="collection z-depth-2">
        <a href="/search-apt" className="collection-item center-align">Search Apartment</a>
        <a href="/write-review" className="collection-item center-align">Write Review</a>
      </div>
    </div>
    <div className="col s12 l9">
      <div className="card z-depth-2">
        <div className="card-content">
          <span className="card-title">123 Fake Street Springfield </span>
          <p>Dates Occupied: 1/1/2000- 1/1/2020</p>
          <p>Review: Real shithole</p>
          <button className="btn-large waves-effect">Edit Review</button>
          <button className="btn-large waves-effect">Delete Review</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  )

}

export default Member;