// import React, { Component } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// class League extends Component {
//   constructor() {
//     super();
//     this.state = {
//       league: []
//     };
//   }

//   componentDidMount() {
//     axios.get("/league").then(response => {
//       // console.log(response);
//       this.setState({
//         league: response.data
//       });
//     });
//   }

//   render() {
//     // console.log(this.state.league);
//     let arr = [];
//     arr.push(this.state.league);

//     let leagueInfo = arr.map((e, i) => {
//       return (
//         <div key={i}>
//           <div>
//             <h1>{e.league_name}</h1>
//             <Link to="/player">
//               <h3>{e.team_name}</h3>
//             </Link>
//           </div>
//           <div>
//             <p>
//               <p>Sport: {e.sport_type}</p>
//               <ul>
//                 Teams: {e.teams}
//                 <li>{e.team_name}</li>
//               </ul>

//               <p>Age Range: {e.age_range}</p>
//               <p>Gender: {e.gender}</p>
//               <p>Location: {e.location}</p>
//             </p>
//           </div>
//         </div>
//       );
//     });
//     return (
//       <div>
//         <h4>LEAGUE NAME</h4>
//         {leagueInfo}
//       </div>
//     );
//   }
// }

// export default League;

// age_range: "18+";
// gender: "co-ed";
// league_name: "Premier";
// location: "Austin, TX";
// sport_type: "soccer";
// team_name: "Hawks";
// teams: 12;
