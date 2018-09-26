require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

const {
  getPlayer,
  loggedIn,
  roster,
  getLeague,
  getTeams
} = require("./controllers/get_controller");
const { checkout } = require("./controllers/stripe_controller");
const { newPlayer, logout, login } = require("./controllers/auth_controller");
const { updateInfo, deleteInfo } = require("./controllers/edit_controller");
const { chatMessage } = require("./controllers/chat_controller");
const { paymentDonation } = require("./controllers/donate_controller");
const {
  registerUser,
  schedulePractice
} = require("./controllers/mailer_controller");
const { profilePic } = require("./controllers/image_controller");

const app = express();

app.use(json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1223334444
    }
  })
);
// app.use(express.static(`${__dirname}/build`));
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

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

checkout(app);

passport.serializeUser((user, done) => {
  const db = app.get("db");
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
    successRedirect: "http://localhost:3000/#/player",
    failureRedirect: "http://localhost:3000/#/ "
  })
);

app.get("/user", loggedIn);
app.get("/player", getPlayer);
app.get("/logout", logout);
app.get("/roster", roster);
app.get("/league", getLeague);
app.get("/teams", getTeams);

app.post("/registration", newPlayer);
app.post("/login", login);
app.post("/team/chat", chatMessage);
app.post("/donate/paymentInfo", paymentDonation);
app.post("/registration/email", registerUser);
app.post("/team/practice", schedulePractice);
app.post("/player/upload", profilePic);

app.put("/playerInfo/:id", updateInfo);

app.delete("/playerInfo/:id", deleteInfo);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
