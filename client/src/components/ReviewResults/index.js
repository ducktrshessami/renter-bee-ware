import React from 'react';
import ReviewCard from "./ReviewCard";

function ReviewResults({ reviews }) {
  return (
    <ul className="row">
      {reviews.map(review => <ReviewCard key={review.id} {...review} />)}
    </ul>
  )
}

export default ReviewResults;
