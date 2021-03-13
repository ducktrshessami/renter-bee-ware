import React from 'react';
import LogoImg from "../../images/android-chrome-512x512.png";

function Index() {
  return(
    <div className="container-8">
      <img id="logo" src={LogoImg}></img>
      <h3>Welcome Renter!</h3>
      <p>We are here to spill all the tea on your next potential apartment or home. Read reviews posted by past renters from the very unit you are interested in or, help help a future renter by leaving a review of the places you've lived! We hope our site helps you avoid a disaster or find your next home. Happy hunting!</p>
      <br/>
      <row>
        <a href="/search-apt" className="waves-effect waves-light btn-large">Search for Reviews</a>
        <a href="/write-review" className="waves-effect waves-light btn-large">Write a Review</a>
      </row>
      <p>Reading our reviews is always free and easy; simply search for a unit by address. If you would like to create a review you will need to log in to your account or sign up.
      </p>
        
    </div>

  );

}

export default Index;