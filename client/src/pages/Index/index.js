import React from 'react';
import Placeholder from "../../images/Buy_a_home_placeholder.png";
import BannerImage from "../../images/zillow-background-image.jpg";

import Logo from "../../images/logo-text.png";

function Index() {
  return(
    <main className="container">
      {/* <div className="row">
        <img src={BannerImage}></img>
      </div> */}
      <div className="row">
        <div className="col s12 m6 l6">
        <img id="logo" src={Logo}>
        </img>
        </div>
      </div>
      
      <h3>Welcome Renter!</h3>
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
                <img src={Placeholder}></img>
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
                <img src={Placeholder}></img>
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

  );

}

export default Index;