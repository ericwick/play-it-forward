module.exports = {
  profilePic: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body);
    db.profile_pic(req.body.url)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
