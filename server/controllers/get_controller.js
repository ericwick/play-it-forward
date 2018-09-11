module.exports = {
  getKidsLeague: (req, res, next) => {
    const db = req.app.get("db");
    const { kidusername } = req.body;
    db.get_kidsleague([kidusername])
      .then(league => res.status(200).json(league))
      .catch(err => console.log("no league", err));
  },
  getAdultLeague: (req, res, next) => {
    const db = req.app.get("db");
    const { adultusername } = req.body;
    db.get_adultleague([adultusername])
      .then(league => res.status(200).send(league))
      .catch(err => console.log("no league", err));
  },
  getKidsTeam: (req, res, next) => {
    const db = req.app.get("db");
    db.get_kidsteam()
      .then(response => res.status(200).json(response))
      .catch(err => console.log("no squad", err));
  }
};
