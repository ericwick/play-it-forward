require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const { json } = require("body-parser");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(json());
app.use(cors());

const {
    getCharacters,
    getEpisodes,
    getLocations,
} = require("./controllers/rickandmorty");

app.get("/characters", getCharacters);
app.get("/locations", getLocations);
app.get("/episodes", getEpisodes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
