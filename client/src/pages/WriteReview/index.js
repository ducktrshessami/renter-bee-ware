import React from "react";
import { useHistory } from "react-router-dom";
import NewReview from "../../components/NewReview";
import API from "../../utils/API";

function WriteReview() {
  const history = useHistory();
  API.isAuthenticated()
    .then(res => {
      if (!res) {
        history.push("/login");
      }
    })
    .catch(console.error);
  return (
    <div className="container">
      <h2 className="center-align">New Review</h2>
      <NewReview />
    </div>
  );
}

export default WriteReview;
