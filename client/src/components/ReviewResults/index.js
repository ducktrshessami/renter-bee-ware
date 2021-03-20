import React, { Component } from 'react';
import ReviewCard from "./ReviewCard";

class ReviewResults extends Component {
  render() {
    return (
      <ul className="row">
        {this.props.reviews.map(review => <ReviewCard key={review.id} {...review} />)}
      </ul>
    )
  }
}

export default ReviewResults;