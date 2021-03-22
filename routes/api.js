const db = require("../models");

module.exports = function (app) {
  app.get("/api/review/:place_id", function (req, res) {
    db.Place.findOne({
      where: { place_id: req.params.place_id },
      include: db.Review,
    })
      .then((data) => res.status(200).json(data))
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  });

  app.post("/api/review", function (req, res) {
    db.Place.findOne({ where: { place_id: req.body.place_id } })
      .then(async (place) => {
        let PlaceId;
        if (place) {
          PlaceId = place.id;
        } else {
          PlaceId = (
            await db.Place.create({
              place_id: req.body.place_id,
              formatted_address: req.body.formatted_address,
              name: req.body.name,
              types: req.body.types,
              latitude: req.body.geometry.location.lat,
              longitude: req.body.geometry.location.lng,
            })
          ).id;
        }
        return PlaceId;
      })
      .then((PlaceId) => db.Review.create({ ...req.body, PlaceId: PlaceId }))
      .then(data => res.status(200).json(data))
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  });
  app.put("/api/review/:id", function (req, res) {
    db.Review.findByPk(req.params.review_id)
      .then(review => {
        if (review) {
          review.update(req.body)
            .then(data => res.status(200).json(data))
        }
        else {
          res.status(400).end();
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  });
};
