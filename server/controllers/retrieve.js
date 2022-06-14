require("dotenv").config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.CONNECTION_STRING);

const getPlayers = async (req, res, next) => {
    await db
        .select("*")
        .from("players")
        .then((response) => {
            console.log(response);
            // res.status(200).json(response);
        })
        .catch((err) => console.log("no player", err));
};

module.exports = {
    getPlayers,
    // getLeagues: (req, res, next) => {
    //     // db = req.app.get("db");
    //     db.get_leagues()
    //         .then((response) => {
    //             console.log(response);
    //             res.status(200).json(response);
    //         })
    //         .catch((err) => console.log("no leagues", err));
    // },
    // getTeams: (req, res, next) => {
    //     // db = req.app.get("db");
    //     db.get_teams()
    //         .then((response) => {
    //             console.log(response);
    //             res.status(200).json(response);
    //         })
    //         .catch((err) => console.log("no teams", err));
    // },
};
