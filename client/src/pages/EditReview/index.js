import React from "react";
import { useHistory } from "react-router-dom";
import API from "../../utils/API";
import EditReviewForm from "../../components/EditReviewForm";

function EditReview() {
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
      <h2 className="center-align">Edit Review</h2>
      <EditReviewForm />
    </div>
  );
}

export default EditReview;
