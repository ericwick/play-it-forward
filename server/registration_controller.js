module.exports = {
  newAdult: (req, res) => {
    const db = req.app.get("db");
    const {
      adultusername,
      adultpassword,
      player_name,
      sports,
      team_name,
      location
    } = req.body;
    db.new_adult(
      adultusername,
      adultpassword,
      player_name,
      sports,
      team_name,
      location
    )
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
      sports,
      team_name,
      location
    } = req.body;
    db.new_kid(
      kidusername,
      kidpassword,
      player_name,
      sports,
      team_name,
      location
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
