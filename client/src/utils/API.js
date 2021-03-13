import fetch from "node-fetch";

const API = {
    newReview: function (reviewData) {
        return fetch("/api/review", {
            method: "post",
            body: JSON.stringify(reviewData),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json());
    },
    findPlaceFromText: function (query) {
        return fetch(`/api/findplacefromtext?q=${query}`)
            .then(res => res.json());
    },
    nearbySearch: function ({ latitude, longitude }, radius, type) {
        let url = `/api/nearbysearch?radius=${radius}&latitude=${latitude}&longitude=${longitude}`;
        if (type) {
            url += "&type=" + type;
        }
        return fetch(url)
            .then(res => res.json());
    },
    placeDetails: function (place_id, sessiontoken) {
        let url = "/api/details/" + place_id;
        if (sessiontoken) {
            url += "?sessiontoken=" + sessiontoken;
        }
        return fetch(url)
            .then(res => res.json());
    }
};

export default API;
