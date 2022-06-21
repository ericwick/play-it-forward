const axios = require("axios");
const baseUrl = "https://rickandmortyapi.com/api";

const getCharacters = (req, res) => {
    axios.get(`${baseUrl}/character`).then((response) => {
        res.send(response.data.results);
    });
};

const getEpisodes = (req, res) => {
    axios.get(`${baseUrl}/episode`).then((response) => {
        res.send(response.data.results);
    });
};

const getLocations = (req, res) => {
    axios.get(`${baseUrl}/location`).then((response) => {
        res.send(response.data.results);
    });
};

module.exports = {
    getCharacters,
    getEpisodes,
    getLocations,
};
