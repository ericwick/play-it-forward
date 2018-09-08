module.exports = {
  getKidsLeagues: (req, res, next) => {
    const db = req.app.get("db");
    db.get_kidsleagues()
      .then(response => res.status(200).json(response))
      .catch(err => console.log("no leagues", err));
  },
  getKidsTeams: (req, res, next) => {
    const db = req.app.get("db");
    db.get_kidsteams()
      .then(response => res.status(200).json(response))
      .catch(err => console.log("no squad", err));
  }
};
