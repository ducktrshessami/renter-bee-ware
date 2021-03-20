import React, { Component } from 'react';
import PlaceInfo from "../../components/PlaceInfo";
import ReviewResults from '../../components/ReviewResults';
import API from "../../utils/API";

class Results extends Component {
  state = {
    place_id: "",
    reviews: [],
    address: "",
    name: "",
    url: "",
    photo: "",
    latitude: null,
    longitude: null
  }

  componentDidMount() {
    let query = new URLSearchParams(window.location.search);
    let place_id = query.get("place");
    if (place_id) {
      this.setState({
        ...this.state,
        place_id: place_id
      });
      API.getReviewsFromPlaceId(place_id)
        .then(res => {
          if (Object.keys(res).length) {
            this.setState({
              ...this.state,
              address: res.formatted_address,
              name: res.name,
              url: res.url,
              photo: res.photo,
              reviews: res.Reviews,
              latitude: res.latitude,
              longitude: res.longitude
            });
          }
          else {
            this.handleNewPlace(place_id);
          }
        });
    }
  }

  handleNewPlace() {
    //do this
  }

  render() {
    return (
      <div>
        <PlaceInfo {...this.state} />
        <br />
        <ReviewResults titleProp="user" reviews={this.state.reviews} />
      </div>
    );
  }
}

export default Results;