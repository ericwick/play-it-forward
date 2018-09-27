module.exports = {
  coverPhotos: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body);
    db.add_coverphotos([req.params.id, req.body.url])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  profilePic: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.body);
    db.profile_pic([req.params.id, req.body.url])
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  },
  getPictures: (req, res, next) => {
    const db = req.app.get("db");
    console.log(req.user, "REQ USER");
    db.get_pictures([req.user.auth_id])
      .then(pics => res.status(200).json(pics))
      .catch(err => console.log(err));
  }
};
