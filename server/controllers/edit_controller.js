module.exports = {
  updateInfo: (req, res, next) => {
    const db = req.app.get("db");
    let { id } = req.params;
    let { player_name, sport_type, position, age, hometown } = req.body.body;
    db.update_profile([id, player_name, hometown, sport_type, age, position])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log("unable to update", err));
  },
  deleteInfo: (req, res, next) => {
    const db = req.app.get("db");
    let { id } = req.params;
    db.delete_profile(id)
      .then(res.status(200))
      .catch(err => console.log(err, "unable to delete"));
  }
};
