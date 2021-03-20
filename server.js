try {
  require("dotenv").config();
}
catch {
  console.log("Not using dotenv. Make sure environment variables are set");
}

const express = require("express");
const session = require("express-session");
const path = require("path");
const db = require("./models");
const passport = require("./config/passport");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Session
app.use(
  session({ secret: "renter bee", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());


// Link API routes
require('./routes/user')(app);
require("./routes/api")(app);
require("./routes/places")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, function () {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  })
  .catch(console.error);
