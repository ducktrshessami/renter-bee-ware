const db = require("../models");

module.exports = function (app) {
    app.post("/api/review", function (req, res) {
        db.Review.create(req.body)
            .then(data => res.status(200).json(data))
            .catch(err => {
                console.error(err);
                res.status(500).end();
            });
    });
};
