module.exports = {
  adultLogin: (req, res, next) => {
    console.log(req.body);
    const db = req.app.get("db");
    const { username, password } = req.body;

    db.get_adultuser([username, password])
      .then(user => {
        console.log(req.session);
        req.session.username = user.username;
        req.session.password = user.password;
        res.status(200).json(req.session);
      })
      .catch(err => console.log(err));
  },
  kidLogin: (req, res, next) => {
    console.log(req.body);
    const db = req.app.get("db");
    const { username, password } = req.body;

    db.get_kiduser([username, password])
      .then(user => {
        console.log(req.session);
        req.session.username = user.username;
        req.session.password = user.password;
        res.status(200).json(req.session);
      })
      .catch(err => console.log(err));
  },
  register: (req, res, next) => {
    const db = req.app.get("db");
    const { username, password } = req.body;

    db.new_adult([username, password]).then(response =>
      res.status(200).json(response)
    );
  },
  logout: (req, res, next) => {
    res.session.destroy();
    res.status(200).json(req.session);
  },
  newAdult: (req, res) => {
    const db = req.app.get("db");
    const {
      adultusername,
      adultpassword,
      player_name,
      team_name,
      sport_type,
      league_name,
      gender,
      age,
      hometown
    } = req.body;
    console.log(req.body);
    db.new_adult([
      adultusername,
      adultpassword,
      player_name,
      team_name,
      sport_type,
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
  newKid: (req, res, next) => {
    const db = req.app.get("db");
    const {
      kidusername,
      kidpassword,
      player_name,
      team_name,
      sport_type,
      league_name,
      gender,
      age,
      hometown
    } = req.body;
    db.new_kid(
      kidusername,
      kidpassword,
      player_name,
      team_name,
      sport_type,
      league_name,
      gender,
      age,
      hometown
    )
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
