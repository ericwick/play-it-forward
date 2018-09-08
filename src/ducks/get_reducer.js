// import axios from "axios";

// const initialState = {
//   league_name: "",
//   sport_type: "",
//   location: "",
//   teams: 0
// };

// const UPDATE_LEAGUE_NAME = "UPDATE_LEAGUE_NAME";
// const UPDATE_SPORT_TYPE = "UPDATE_SPORT_TYPE";
// const UPDATE_LOCATION = "UPDATE_LOCATION";
// const UPDATE_TEAMS = "UPDATE_TEAMS";

// export default function getReducer(state = initialState, action) {
//   switch (action.type) {
//     case UPDATE_LEAGUE_NAME:
//       return {
//         ...state,
//         league_name: response.data
//       };
//     case UPDATE_SPORT_TYPE:
//       return {
//         ...state,
//         sport_type: response.data
//       };
//     case UPDATE_LOCATION:
//       return {
//         ...state,
//         location: response.data
//       };
//     case UPDATE_TEAMS:
//       return {
//         ...state,
//         teams: response.data
//       };

//     default:
//       return state;
//   }
// }

// export function updateLeagueName(league_name) {
//   return {
//     type: UPDATE_LEAGUE_NAME,
//     payload: axios
//       .get("/kidsleagues", league_name)
//       .then(response => res.status(200).json(response))
//   };
// }

// export function updateSportType(sport_type) {
//   return {
//     type: UPDATE_SPORT_TYPE,
//     payload: axios
//       .get("/kidsleagues", sport_type)
//       .then(response => res.status(200).json(response))
//   };
// }

// export function updateLocation(location) {
//   return {
//     type: UPDATE_LOCATION,
//     payload: axios
//       .get("/kidsleagues", location)
//       .then(response => res.status(200).json(response))
//   };
// }

// export function updateTeams(teams) {
//   return {
//     type: UPDATE_TEAMS,
//     payload: axios
//       .get("/kidsleagues", teams)
//       .then(response => res.status(200).json(response))
//   };
// }
