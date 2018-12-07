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

// OLD GET USER SCHEMA
// SELECT username FROM users
// WHERE auth_id = $1;

/* <Edit
  updateInfo={this.updateInfo}
  sportsInfo={sportsInfo}
  showEdit={this.state.showEdit}
  toggleEdit={() => {
    this.setState({ showEdit: !this.state.showEdit });
  }}
  /> */

// handleToggle() {
//   this.setState({
//     showEdit: !this.state.showEdit
//   });
// }

// handleChange(e) {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// }

// onSave() {
//   this.setState({
//     showEdit: false
//   });
// }

// renderEditBox() {
//   if (this.state.showEdit === "false") {
//     return (
//       <div>
//         <button onClick={this.handleToggle}>Edit</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <p>
//           <input onChange={this.handleChange} value={this.state.inputText} />
//           <button onClick={this.onSave}>Save</button>
//         </p>
//       </div>
//     );
//   }
// }

// renderButton() {
//   if (this.state.showEdit === false) {
//     return (
//       <div>
//         <button onClick={this.handleToggle}>Edit</button>
//       </div>
//     );
//   } else {
//     return (

//         <button onClick={this.onSave}>Save</button>
//       </div>
//     );
//   }
// }

// doPayment(amount, tokenId, accessToken) {
//   const body = {
//     amount: amount,
//     tokenId: tokenId
//   };
//   const headers = {
//     "Content-Type": "application/json"
//   };
//   return axios
//     .post("/donate/monetary", body, { headers })
//     .then(({ data }) => {
//       return data;
//     })
//     .catch(error => {
//       return Promise.reject("Error in making payment", error);
//     });
// }

// requestPayment() {
//   this.setState({ isPaymentPending: true });
//   return stripe
//     .paymentRequestWithCardForm()
//     .then(stripeTokenInfo => {
//       return this.doPayment(100, stripeTokenInfo.tokenId);
//       console.log("Token created", { stripeTokenInfo });
//     })
//     .then(() => {
//       console.log("Payment Success!");
//     })
//     .catch(error => {
//       console.log("Payment Failed", { error });
//     })
//     .finally(() => {
//       this.setState({
//         isPaymentPending: false
//       });
//     })
//     .catch(error => {
//       console.log("Payment failed", { error });
//     });
// }

// TEAM ROSTERS

// let squad = arr.map((e, i) => {
//   return (
//     <div>
//       <div key={i} className="teampage">
//         <h1 id="teamtitle">{e.team_name}</h1>
//       </div>
//       <div className="teampageinfo">
//         <div className="donationsdiv">
//           <h2 id="donations">
//             {e.team_name}' Total Donations: ${e.donations}
//           </h2>
//         </div>
//         <div className="teaminformationdiv">
//           <Link to="/league" className="teampagelink">
//             <p>League: {e.league_name}</p>
//           </Link>
//           <p>Sport: {e.sport_type}</p>
//           <p>
//             Record: {e.wins}-{e.loses}
//             {e.ties !== 0 ? -e.ties : null}
//           </p>
//           <p>Age Range: {e.age_range}</p>
//           <p>Gender: {e.gender_type}</p>
//           <p>Location: {e.location}</p>
//         </div>
//         <div className="rostertitle">ROSTER</div>
//         <hr className="linebreak" />
//         <Roster />
//       </div>
//     </div>
//   );
// });
