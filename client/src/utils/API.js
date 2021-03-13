import fetch from "node-fetch";

const API = {
    newReview: function (reviewData) {
        return fetch("/api/review", {
            method: "post",
            body: JSON.stringify(reviewData),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json());
    }
};

export default API;
