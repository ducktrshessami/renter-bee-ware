import React from 'react';
import { motion } from 'framer-motion';
import ReadReviewsImg from "../../images/read-review-card-img.png";
import WriteReviewImg from "../../images/write-review-card-img.png";

function Index() {
  return (
    <React.Fragment>
      <div className="hero-image">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}>Welcome Renter!</motion.h1>
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}>Here to keep you from getting stung by another bad living situation.</motion.h5>
        </div>
      </div>
      <main className="container">
        <div className="row">
          <div className="col s12 m10 l8 offset-l2 offset-m1">
            <p>Our reviews could you avoid a disaster or find a great place to live. Reading our reviews is always free and easy, simply search for a unit by address. If you would like to write a review you will need to log in to your account or sign up. Happy hunting!</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8 l8 offset-l2 offset-m2">
            <div className="col s12 m6 l6">
              <div className="card hoverable">
                <div className="card-image">
                  <img alt="read logo" src={ReadReviewsImg}></img>
                </div>
                <span className="card-title">Read reviews</span>
                <div className="card-content">
                  <p>Search for reviews of the palaces you are looking at.</p>
                </div>
                <div className="card-action">
                  <a href="/search-apt" className="waves-effect waves-light btn-large">Search</a>
                </div>
              </div>
            </div>
            <div className="col s12 m6 l6">
              <div className="card hoverable">
                <div className="card-image">
                  <img alt="write logo" src={WriteReviewImg}></img>
                </div>
                <span className="card-title">Write a review</span>
                <div className="card-content">
                  <p>Help a future renter by reviewing places you've lived.</p>
                </div>
                <div className="card-action">
                  <a href="/write-review" className="waves-effect waves-light btn-large">New Review</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Index;