import React from 'react';
import ReviewCard from "./ReviewCard";

function ReviewResults({ reviews, titleProp }) {
  return (
    <ul className="row">
      {reviews.map(review => <ReviewCard key={review.id} title={review[titleProp]} {...review} />)}
    </ul>
  )
}

export default ReviewResults;
