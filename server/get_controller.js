module.exports = {
  getLeagues: (req, res, next) => {
    const db = req.app.get("db");
    db.get_leagues()
      .then(response => res.status(200).json(response))
      .catch(err => console.log("no leagues", err));
  },
  getTeams: (req, res, next) => {
    const db = req.app.get("db");
    db.get_teams()
      .then(response => res.status(200).json(response))
      .catch(err => console.log("no squad", err));
  }
};
