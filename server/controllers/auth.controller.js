module.exports = {
  login: (req, res, next) => {
    console.log(req.body);
    const db = req.app.get("db");
    const { username, password } = req.body;

    db.get_user([username, password])
      .then(user => {
        console.log(req.session);
        req.session.username = user.username;
        req.session.password = user.password;
        res.status(200).json(req.session);
      })
      .catch(err => console.log(err));
  },
  // register: (req, res, next) => {
  //   const db = req.app.get("db");
  //   const { username, password } = req.body;

  //   db.new_adult([username, password]).then(response =>
  //     res.status(200).json(response)
  //   );
  // },
  logout: (req, res, next) => {
    res.session.destroy();
    res.status(200).json(req.session);
  },
  newPlayer: (req, res) => {
    const db = req.app.get("db");
    const {
      player_name,
      team_name,
      sport_type,
      position,
      league_name,
      gender,
      age,
      hometown
    } = req.body;
    console.log(req.body);
    db.new_player([
      player_name,
      team_name,
      sport_type,
      position,
      league_name,
      gender,
      age,
      hometown
    ])
      .then(() => {
        res.status(200);
      })
      .catch(err => res.status(500).json(console.log("failed to login", err)));
  },
  logout: (req, res) => {
    req.session.destroy(() => {
      res.redirect("http://localhost:3001/");
    });
  }
};
