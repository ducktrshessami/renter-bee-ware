import React, { Component } from "react";
import API from "../../utils/API";
import StarRating from "../StarRating";

const placeholderImage = "https://via.placeholder.com/100";

function getAverageRating(Place) {

}

export default class ResultsCard extends Component {
  state = {};

  componentDidMount() {
    API.getReviewsFromPlaceId(this.props.place_id)
      .then(res => {
        if (res) {
          this.setState({ rating: getAverageRating(res) });
        }
      })
      .catch(console.error);
  }

  writeReview() {
    let [street, city, state_zip, country] = this.props.address.split(",").map(part => part.trim());
    let [state, zip] = state_zip.split(" ").map(part => part.trim());
    this.props.history.push(`/write-review?street=${street}&city=${city}&state=${state}&zip=${zip}&country=${country}`);
  }

  render() {
    return (
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col s8 offset-s2 valign">
            <h3 className="header">Search Results</h3>
            <div className="card horizontal result-card">
              <div className="card-image">
                <img src={this.props.photo || placeholderImage} alt={this.props.name} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  {this.state.rating ? <StarRating rating={this.state.rating} static={true} /> : undefined}
                  <p>{this.props.address}</p>
                </div>
                <div className="card-action">
                  <button
                    className="btn btn-large waves-effect waves-light"
                    type="submit"
                    name="action"
                    onClick={() => this.writeReview()}
                  >
                    Write Review
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
