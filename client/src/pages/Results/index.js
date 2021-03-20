import React, { Component } from 'react';
import PlaceInfo from "../../components/PlaceInfo";
import ReviewResults from '../../components/ReviewResults';

class Results extends Component {
  state = {
    placeId: ""
  }

  componentDidMount() {
    let query = new URLSearchParams(window.location.search);
    this.setState({ placeId: query.get("place") || "" });
  }

  render() {
    return (
      <div>
        <PlaceInfo placeId={this.state.place_id} />
        <br />
        <ReviewResults placeId={this.state.place_id} />
      </div>
    );
  }
}

export default Results;