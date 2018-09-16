import axios from "axios";

const initialState = {
  sportsInfo: {},
  user: {},
  team: [],
  leagues: []
  // player_name: "",
  // sport_type: "",
  // position: "",
  // age: "",
  // hometown: ""
};

const UPDATE_SPORTSINFO = "UPDATE_SPORTSINFO";
const UPDATE_USER = "UPDATE_USER";
const UPDATE_TEAM = "UPDATE_TEAM";
const UPDATE_LEAGUE = "UPDATE_LEAGUE";
// const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
// const UPDATE_SPORT_TYPE = "UPDATE_SPORT_TYPE";
// const UPDATE_POSITION = "UPDATE_POSITION";
// const UPDATE_AGE = "UPDATE_AGE";
// const UPDATE_HOMETOWN = "UPDATE_HOMETOWN";

export default function getReducer(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_SPORTSINFO}_FULFILLED`:
      return {
        ...state,
        sportsInfo: action.payload.data
      };
    case `${UPDATE_USER}_ FULFILLED`:
      return {
        ...state,
        user: action.payload.data
      };
    case `${UPDATE_TEAM}_FULFILLED`:
      return {
        ...state,
        team: action.payload.data
      };
    case `${UPDATE_LEAGUE}_FULFILLED`:
      return {
        ...state,
        leagues: action.payload.data
      };
    // case `${UPDATE_PLAYER_NAME}_FULFILLED`:
    //   return {
    //     ...state,
    //     player_name: action.payload.data
    //   };
    // case `${UPDATE_HOMETOWN}_FULFILLED`:
    //   return {
    //     ...state,
    //     hometown: action.payload.data
    //   };
    // case `${UPDATE_SPORT_TYPE}_FULFILLED`:
    //   return {
    //     ...state,
    //     sport_type: action.payload.data
    //   };
    // case `${UPDATE_AGE}_FULFILLED`:
    //   return {
    //     ...state,
    //     age: action.payload.data
    //   };
    // case `${UPDATE_POSITION}_FULFILLED`:
    //   return {
    //     ...state,
    //     position: action.payload.data
    //   };
    default:
      return state;
  }
}

export function updateSportsInfo() {
  return {
    type: UPDATE_SPORTSINFO,
    payload: axios.get("/player")
  };
}

export function updateUser() {
  return {
    type: UPDATE_USER,
    payload: axios.get("/player")
  };
}

export function updateTeam() {
  return {
    type: UPDATE_TEAM,
    payload: axios.get("/roster")
  };
}

export function updateLeague() {
  return {
    type: UPDATE_LEAGUE,
    payload: axios.get("/league")
  };
}

// export function updatePlayerName(id, player_name) {
//   return {
//     type: UPDATE_PLAYER_NAME,
//     payload: axios.put(`/playerInfo/${id}`, { player_name })
//   };
// }

// export function updatePosition(id, position) {
//   return {
//     type: UPDATE_POSITION,
//     payload: axios.put(`/playerInfo/${id}`, { position })
//   };
// }
// export function updateAge(id, age) {
//   return {
//     type: UPDATE_AGE,
//     payload: axios.put(`/playerInfo/${id}`, { age })
//   };
// }
// export function updateHometown(id, hometown) {
//   return {
//     type: UPDATE_HOMETOWN,
//     payload: axios.put(`/playerInfo/${id}`, { hometown })
//   };
// }
// export function updateSports(id, sport_type) {
//   return {
//     type: UPDATE_SPORT_TYPE,
//     payload: axios.put(`/playerInfo/${id}`, { sport_type })
//   };
// }
