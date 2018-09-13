import axios from "axios";

const initialState = {
  sportsInfo: {}
};

const UPDATE_SPORTSINFO = "UPDATE_SPORTSINFO";

export default function getReducer(state = initialState, action) {
  switch (action.type) {
    case `${UPDATE_SPORTSINFO}_FULFILLED`:
      return {
        ...state,
        sportsInfo: action.payload.data
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
