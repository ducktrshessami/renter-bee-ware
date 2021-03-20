import React from 'react';
import PlaceInfo from "../../components/PlaceInfo";
import ReviewResults from '../../components/ReviewResults';

function Results() {
  let query = new URLSearchParams(window.location.search);
  let place_id = query.get("place");

  return (
    <div>
      <PlaceInfo placeId={place_id} />
      <br />
      <ReviewResults placeId={place_id} />
    </div>
  )
}

export default Results;