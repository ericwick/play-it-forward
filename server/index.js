require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const { getLeagues, getTeams } = require("./get_controller");

const app = express();

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => app.set("db", db))
  .catch(err => console.log("ERROR", err));

app.get("/leagues", getLeagues);
app.get("/leagues/teams", getTeams);

const port = 3001;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
