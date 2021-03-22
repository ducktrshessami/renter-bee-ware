import React from 'react';
import ReviewCard from "./ReviewCard";

function ReviewResults({ reviews, titleProp }) {
  return (
    <ul className="row">
      {reviews.map(review => <ReviewCard key={review.id} title={titleProp.toLowerCase().trim() === "user" ? `${review.User.firstName} ${review.User.lastName}` : review.Place.formatted_address} {...review} />)}
    </ul>
  )
}

export default ReviewResults;
