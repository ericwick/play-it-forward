// GET REQUEST FOR LEAGUES AND TEAMS
// componentDidMount() {
//         axios.get("/leagues").then(response => {
//           this.setState({
//             leagues: response.data
//           });
//         });
//         axios.get("/leagues/teams").then(response => {
//           console.log(response);
//           this.setState({
//             teams: response.data
//           });
//         });
// }

// MAPPING OVER TEAM NAMES AND LEAGUE NAMES
// const conferences = this.state.leagues.map((league, i) => {
//         return <div key={i}>{league.league_name}</div>;
//       });

//       const squads = this.state.teams.map((team, i) => {
//         return <div key={i}>{team.team_name}</div>;
//       });

// TEST RENDER WHEN CONNECTING DATABASE
{
  /* <div style={{ float: "left" }}>
          <h1>LEAGUES</h1>
          {conferences}
        </div>

        <div style={{ float: "right" }}>
          <h1>TEAMS</h1>
          {squads}</div> */
}

// AUTH0 STUFF I COULDN'T FIGURE OUT 9/10 morning
// app.get(
//   "/login",
//   passport.authenticate("auth0", {
//     successRedirect: "/KidRegistration",
//     failureRedirect: "/login"
//   })
// );
// app.get("/leagues", authenticated, (req, res, next) => {
//   res.status(200).json(leagues);
// });
// function authenticated(req, res, next) {
//   if (!req.user) {
//     res.sendStatus(401);
//   } else {
//     next();
//   }
// }
// passport.use(strategy);

// passport.serializeUser((user, done) => {
//   const db = app.get("db", db);
//   db.get_user_by_authid(user.id).then(user => {
//     // CHECK TO SEE HOW DATA IS COMING IN FROM DATABASE
//     if (!user[0]) {
//       db.add_user_by_authid(profile.id, profile.displayName)
//         .then(response => {
//           return done(null, response[0]);
//           // ALSO CHECK THE RESPONSE
//         })
//         .catch(err => console.log(err));
//     } else {
//       return done(null, user);
//     }
//   });
// });

// passport.deserializeUser((obj, done) => {
//   done(null, obj);
// });
// app.use(passport.initialize());
// app.use(passport.session());

// passport.use(strategy);
