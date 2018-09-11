require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const {
  getLeague,
  getTeam,
  getPlayer
} = require("./controllers/get_controller");
const {
  newPlayer,
  logout,
  login,
  register
} = require("./controllers/auth.controller");

const app = express();

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
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
      callbackURL: "/player"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      return done(null, profile);
    }
  )
);

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

passport.serializeUser((user, done) => {
  const db = app.get("db");
  console.log(user);
  db.get_player(user.id)
    .then(response => {
      if (!response[0]) {
        db.new_user([user.displayName, user.id]);
      } else {
        return done(null, response[0]);
      }
    })
    .catch(err => console.log(err));
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3001/player",
    failureRedirect: "http://localhost:3000/#/ "
  })
);

function authenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

app.get("/player", getPlayer);
app.get("/leagues", authenticated, getLeague);

app.post("/registration", newPlayer);
app.post("/login", login);
// app.post("/register", register);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
