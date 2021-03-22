const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // Log In
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Sign Up
  app.post("/api/signup", (req, res) => {
    db.User.create({

      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Log Out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
