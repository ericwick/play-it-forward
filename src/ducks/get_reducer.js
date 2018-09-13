import axios from "axios";

const initialState = {
  sportsInfo: {},
  user: {},
  team: []
};

const UPDATE_SPORTSINFO = "UPDATE_SPORTSINFO";
const UPDATE_USER = "UPDATE_USER";
const UPDATE_TEAM = "UPDATE_TEAM";

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
