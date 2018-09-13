module.exports = {
  getPlayer: (req, res, next) => {
    const db = req.app.get("db");
    // console.log(req.user, "REQ.USER");
    db.get_player(req.user.auth_id)
      .then(player => {
        console.log(player);
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
  }
};
