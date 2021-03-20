const Places = require("../controllers/Places")(process.env.PLACES_KEY);

module.exports = function (app) {
    app.get("/api/findplacefromtext", function (req, res) {
        Places.findPlaceFromText(req.query.q)
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.error(err);
                res.status(400).end();
            });
    });

    app.get("/api/nearbysearch", function (req, res) {
        Places.nearbySearch({
            latitude: req.query.latitude,
            longitude: req.query.longitude
        }, req.query.radius, req.query.type)
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.error(err);
                res.status(400).end();
            });
    });

    app.get("/api/textsearch", function (req, res) {
        Places.textSearch(req.query)
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.error(err);
                res.status(400).end();
            });
    });

    app.get("/api/details/:place_id", function (req, res) {
        Places.details(req.params.place_id, req.query.sessiontoken)
            .then(response => res.status(200).json(response))
            .catch(err => {
                console.error(err);
                res.status(400).end();
            });
    });

    app.get("/api/photo/:photo_reference", function (req, res) {
        Places.photo(req.params.photo_reference)
            .then(photo => photo.pipe(res.status(200)));
    });
};
