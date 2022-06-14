require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const { json } = require("body-parser");
const { getPlayers } = require("./controllers/retrieve");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(json());
app.use(cors());

const client = new MongoClient(process.env.CONNECTION_STRING);

app.get("/players", getPlayers);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
