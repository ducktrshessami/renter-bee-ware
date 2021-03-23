import React from "react";
import { useHistory } from "react-router-dom";
import NewReview from "../../components/NewReview";
import API from "../../utils/API";

function WriteReview() {
  const [UserId, setUserId] = React.useState();
  const history = useHistory();
  API.getUserData()
    .then(res => {
      if (res && Object.keys(res).length) {
        setUserId(res.id);
      }
      else {
        history.push("/login");
      }
    })
    .catch(console.error);
  return (
    <div className="container">
      <h2 className="center-align">New Review</h2>
      <NewReview UserId={UserId} />
    </div>
  );
}

export default WriteReview;
