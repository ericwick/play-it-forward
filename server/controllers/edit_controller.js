module.exports = {
  updateInfo: (req, res, next) => {
    const db = req.app.get("db");
    let { player_name, sport_type, position, age, hometown } = req.body;
    db.update_profile(req.body.id, [
      player_name,
      hometown,
      sport_type,
      age,
      position
    ])
      .then(response => {
        console.log(response);
        res.status(200).json(response);
      })
      .catch(err => console.log("unable to update", err));
  }
};
