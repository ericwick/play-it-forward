module.exports = {
  updateInfo: (req, res, next) => {
    const db = req.app.get("db");
    let {
      auth_id,
      player_name,
      sport_type,
      position,
      age,
      hometown
    } = req.body;
    console.log(req.body, "REQ BODY");
    db.update_profile([
      auth_id,
      player_name,
      hometown,
      sport_type,
      age,
      position
    ])
      .then(response => {
        res.status(200).json(response);
        console.log(response, "UPDATE");
      })
      .catch(err => console.log("unable to update", err));
  }
};
