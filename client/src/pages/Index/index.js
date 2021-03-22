import React from 'react';
import ReadReviewsImg from "../../images/read-review-card-img.png";
import WriteReviewImg from "../../images/write-review-card-img.png";
import "./style.css";

function Index() {
  return(
    <React.Fragment>
    <div className= "hero-image">
      <div className="hero-text">
        <h2>Welcome Renter!</h2>
      </div>
    </div>
    <main className="container">
      <div className="row">
        <div className="col s12 m2 l2"></div>
        <div className="col s12 m10 l8">
          <p>We are here to spill all the tea on your next potential apartment or home. Our reviews could you avoid a disaster or find your next place to live. Reading our reviews is always free and easy; simply search for a unit by address. If you would like to create a review you will need to log in to your account or sign up. Happy hunting!</p>
        </div>
        <div className="col s12 m2 l2"></div>
      </div>
      <div className="row">
        <div className="col s12 m2 l2"></div>
        <div className="col s12 m8 l8">
          <div className="col s12 m6 l6">
            <div className="card hoverable">
              <div className="card-image">
                <img src={ReadReviewsImg}></img>
              </div>
              <span className="card-title">Read reviews</span>
              <div className="card-content">
                <p>Search for reviews of the palaces you are interested in.</p>
              </div>
              <div className="card-action">
              <a href="/search-apt" className="waves-effect waves-light btn-large">Search</a>
              </div>
            </div>
          </div>
          <div className="col s12 m6 l6">
            <div className="card hoverable">
              <div className="card-image">
                <img src={WriteReviewImg}></img>
              </div>
              <span className="card-title">Write a review</span>
              <div className="card-content">
                <p>Help a future renter by leaving a review of the places you've lived.</p>
              </div>
              <div className="card-action">
              <a href="/write-review" className="waves-effect waves-light btn-large">New Review</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 m2 l2"></div>
      </div>       
    </main>
    </React.Fragment>
  );
}

export default Index;