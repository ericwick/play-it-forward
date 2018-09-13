import axios from "axios";

const initialState = {
  sportsInfo: {},
  user: {}
};

const UPDATE_SPORTSINFO = "UPDATE_SPORTSINFO";
const UPDATE_USER = "UPDATE_USER";

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
