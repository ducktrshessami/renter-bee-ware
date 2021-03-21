import React, { Component } from "react";
import { motion } from 'framer-motion';
import ReviewResults from "../../components/ReviewResults";
import API from "../../utils/API";

class Member extends Component {
  state = { reviews: [] }

  componentDidMount() {
    // API call to get reviews from member ID
  }

  render() {
    return (
      <div className="center-align">
        <div className='hero-image center-align valign-center'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="center-align" style={{ color: "white" }}>Welcome, Stranger</motion.h1>
        </div>
        <div className="container">
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
              <div className="card z-depth-2 hoverable">
                <div className="card-content">
                  <span className="card-title">123 Fake Street Springfield </span>
                  <p>Dates Occupied: 1/1/2000- 1/1/2020</p>
                  <p>Stars: </p>
                  <p>Review: Real shithole</p>
                  <button className="btn-large waves-effect waves-light">Edit Review</button>
                  <button className="btn-large waves-effect waves-light">Delete Review</button>
                </div>
              </div>
            </div>
            <ReviewResults titleProp="address" reviews={this.state.reviews} />
          </div>
        </div>
      </div>
    )
  }
}

export default Member;
