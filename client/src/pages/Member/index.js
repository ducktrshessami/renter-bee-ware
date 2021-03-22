import React from "react";
import { motion } from 'framer-motion';

function Member() {
  return (
  <div>
    <div className="hero-image">
        <motion.h2 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
          transition={{duration: 4}}
          className="hero-text">Welcome, Stranger</motion.h2>
          <motion.h5 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 4}}
          className="hero-text">Search Apartments, Write, Edit, and Delete Reviews Here</motion.h5>
          
    </div>
    <div className="container">
      <div className='row'>
        <div className='row'>
          <div className="col">
          </div>
        </div>
      <div className="col l3">
        <div className="collection z-depth-2">
          <a href="/search-apt" className="collection-item center-align">Search Apartment</a>
          <a href="/write-review" className="collection-item center-align">Write Review</a>
        </div>
      </div>
      <div>
        <h5>My Reviews</h5>
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
      </div>
    </div>
  </div>
  )

}

export default Member;