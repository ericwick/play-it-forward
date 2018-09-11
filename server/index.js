require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const {
  getKidsLeagues,
  getAdultLeagues,
  getKidsTeams
} = require("./controllers/get_controller");
const {
  newAdult,
  newKid,
  logout,
  adultLogin,
  kidLogin,
  register
} = require("./controllers/auth.controller");

const app = express();

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    user: ""
  })
);
app.use(express.static(`${__dirname}/build`));
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/login",
      scope: "openid email profile"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  const db = req.app.get("db");

  db.get_adultuser(user.id).then(response => {
    console.log(response);
    // if (!response[0]) {
    //   db.new_adult([]);
    // }
  });
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

app.get(
  "/api/adultlogin",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/",
    failureRedirect: "http://localhost:3000/#/login",
    connection: "google-oauth2"
  })
);
app.get(
  "/api/kidlogin",
  passport.authenticate("auth0", {
    successRedirect: "/api/kidsleagues",
    failureRedirect: "/login",
    connection: "google-oauth2"
  })
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get("/api/kidsleagues", authenticated, getKidsLeagues);
app.get("/api/adultleagues", authenticated, getAdultLeagues);
// app.get("/kidsleagues/teams", getKidsTeams);

app.post("/api/adultregistration", newAdult);
app.post("/kidregistration", newKid);
app.post("/api/loginadult", adultLogin);
app.post("/api/loginkid", kidLogin);
app.post("./api/register", register);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
