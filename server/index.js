require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const {
  getKidsLeague,
  getAdultLeague,
  getKidsTeam
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
      scope: "openid email profile",
      callbackURL: "/login"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
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
  "/adultlogin",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/adultleagues",
    failureRedirect: "http://localhost:3001/#/login"
    // connection: "google-oauth2"
  })
);
app.get(
  "/kidlogin",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/#/kidsleagues",
    failureRedirect: "http://localhost:3000/#/login"
    // connection: "google-oauth2"
  })
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get("/kidsleagues", authenticated, getKidsLeague);
app.get("/adultleagues", authenticated, getAdultLeague);

app.post("/adultregistration", newAdult);
app.post("/kidregistration", newKid);
app.post("/loginadult", adultLogin);
app.post("/loginkid", kidLogin);
app.post("/register", register);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
