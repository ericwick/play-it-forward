module.exports = {
  getPlayer: (req, res, next) => {
    const db = req.app.get("db");
    db.get_player(req.user.auth_id)
      .then(player => {
        return res.status(200).send(player[0]);
      })
      .catch(err => console.log("no player", err));
  },
  loggedIn: (req, res, next) => {
    if (!req.session.user) {
      res.sendStatus(401);
    } else {
      res.status(200).send(req.session.user);
    }
  },
  roster: (req, res, next) => {
    const db = req.app.get("db");
    db.get_roster()
      .then(roster => {
        console.log("ROSTER", roster);
        return res.status(200).json(roster);
      })
      .catch(err => console.log("no roster", err));
  }
};
