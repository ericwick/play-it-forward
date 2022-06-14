const nodemailer = require("nodemailer");

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "wickham.eaw@gmail.com",
    pass: "dart42793"
  }
});

var registerUser = (req, res, next) => {
  console.log(req.body);
  var mail = {
    from: "wickham.eaw@gmail.com",
    to: req.body.email,
    subject: "Thanks for Registering!",
    html: "<p>Follow the links below to continue your registration</p>"
  };
  smtpTransport.sendMail(mail, function(error, response) {
    if (error) {
      console.log("email sending error!");
      console.log(error);
    } else {
      console.log("Success!");
    }
    smtpTransport.close();
  });
  res.sendStatus(200);
};

var schedulePractice = (req, res, next) => {
  console.log(req.body, "REQ BODY FOR THE PRACTICE EMAIL");
  let emails = req.body.teamEmails.map((e, i) => {
    return e;
  });
  var mail = {
    from: "wickham.eaw@gmail.com",
    to: emails,
    subject: "Practice Scheduled for {DATE}",
    html:
      "<p>{PLAYER_NAME} has scheduled practice for {TEAM_NAME} on {DATE}. Please let them know if you can attend.</p>"
  };
  smtpTransport.sendMail(mail, function(error, response) {
    if (error) {
      console.log("email sending error!");
      console.log(error);
    } else {
      console.log("Success!");
    }
    smtpTransport.close();
  });
  res.sendStatus(200);
};

module.exports = {
  registerUser,
  schedulePractice
};
