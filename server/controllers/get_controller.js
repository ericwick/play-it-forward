module.exports = {
  getLeague: (req, res, next) => {
    const db = req.app.get("db");
    const { username } = req.body;
    db.get_league([username])
      .then(league => res.status(200).json(league))
      .catch(err => console.log("no league", err));
  },
  getTeam: (req, res, next) => {
    const db = req.app.get("db");
    db.get_team()
      .then(response => res.status(200).json(response))
      .catch(err => console.log("no squad", err));
  },
  getPlayer: (req, res, next) => {
    const db = req.app.get("db");
    db.get_player()
      .then(player => {
        console.log(player[0]);
        res.status(200).json(player[0]);
      })
      .catch(err => console.log("no player", err));
  }
};
