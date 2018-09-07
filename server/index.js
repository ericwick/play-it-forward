require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const { getLeagues, getTeams } = require("./get_controller");

const { newAdult, newKid } = require("./registration_controller");

const app = express();

app.use(json());
app.use(express.static(`${__dirname}/build`));

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

app.get("/leagues", getLeagues);
app.get("/leagues/teams", getTeams);

app.post("/adultregistration", newAdult);
app.post("/kidregistration", newKid);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
