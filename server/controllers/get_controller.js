module.exports = {
  getKidsLeagues: (req, res, next) => {
    const db = req.app.get("db");
    db.get_kidsleague()
      .then(league => res.status(200).json(league))
      .catch(err => console.log("no league", err));
  },
  getAdultLeagues: (req, res, next) => {
    const db = req.app.get("db");
    db.get_adultleague()
      .then(league => res.status(200).send(league))
      .catch(err => console.log("no league", err));
  },
  getKidsTeams: (req, res, next) => {
    const db = req.app.get("db");
    db.get_kidsteam()
      .then(response => res.status(200).json(response))
      .catch(err => console.log("no squad", err));
  }
};
