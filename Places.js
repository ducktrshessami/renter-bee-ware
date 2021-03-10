const fetch = require("node-fetch");

module.exports = function (apikey) {
    function findPlaceFromText(query) {
        return fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${apikey}&input=${query}&inputtype=textquery&fields=place_id,formatted_address,name,types`)
            .then(res => res.json());
    }

    function nearbySearch({ latitude, longitude }, radius, type) {
        let url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apikey}&location=${latitude},${longitude}&radius=${radius}`;
        if (type) {
            url += `&type=${type}`;
        }
        return fetch(url)
            .then(res => res.json());
    }

    function textSearch(options) {
        let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${apikey}`;
        for (let param in options) {
            url += `&${param}=${options[param]}`;
        }
        return fetch(url)
            .then(res => res.json());
    }

    function details(place_id, sessiontoken) {
        let url = `https://maps.googleapis.com/maps/api/place/details/json?key=${apikey}&place_id=${place_id}&fields=place_id,formatted_address,name,type,business_status,url,photo`;
        if (sessiontoken) {
            url += `&sessiontoken=${sessiontoken}`;
        }
        return fetch(url)
            .then(res => res.json());
    }

    return {
        findPlaceFromText,
        nearbySearch,
        textSearch,
        details
    };
};
