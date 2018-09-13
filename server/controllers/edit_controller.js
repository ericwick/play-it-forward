module.exports = {
  addImage: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body);
    db.add_image(req.body.picture)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => console.log(err));
  }
};
