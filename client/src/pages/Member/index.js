import React, { Component } from "react";
import { motion } from 'framer-motion';
import API from "../../utils/API";
import ReviewResults from "../../components/ReviewResults";
import "./style.css";


class Member extends Component {
  state = { reviews: [] }

  componentDidMount() {
    API.isAuthenticated()
      .then(res => {
        if (!res) {
          window.location.pathname = "/login";
        }
      })
      .catch(console.error);
    // API call to get reviews from member ID
  }

  render() {
    return (
      <div className="center-align">
        <div className="hero-image center-align member-title">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="center-align">Welcome, Stranger</motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
            className="center-align">Search Apartments, Write, Edit, and Delete Reviews Here.</motion.h5>
        </div>
        <div className="container">
          <div className='row'>
            <div className='row'>
              <div className="col">
              </div>
            </div>
            <div className="col l5">
              <h5>What would you like to do?</h5>
              <div className="collection z-depth-2">
                <a href="/search-apt" className="collection-item center-align">Search Apartment</a>
                <a href="/write-review" className="collection-item center-align">Write Review</a>
              </div>
            </div>
            <div className="col s12 l7">
              <h5>My Reviews</h5>
              <ReviewResults titleProp="address" reviews={this.state.reviews} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Member;
