module.exports = {
  getPlayer: (req, res, next) => {
    const db = req.app.get("db");
    // console.log(req.user, "USEROBJ");
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
    db.get_roster(req.user.team_name)
      .then(roster => {
        return res.status(200).json(roster);
      })
      .catch(err => console.log("no roster", err));
  },
  getLeague: (req, res, next) => {
    const db = req.app.get("db");
    db.get_league(req.user.league_name)
      .then(league => {
        return res.status(200).json(league);
      })
      .catch(err => console.log("no roster", err));
  },
  getTeams: (req, res, next) => {
    const db = req.app.get("db");
    db.get_teams()
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(err => console.log("no teams", err));
  }
};
