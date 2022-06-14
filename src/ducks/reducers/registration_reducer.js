import axios from "axios";

const initialState = {
  player_name: "",
  email: "",
  team_name: "",
  sport_type: "",
  position: "",
  gender: "",
  age: 0,
  hometown: "",
  teams: []
};

const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
const UPDATE_EMAIL = "UPDATE_EMAIL";
const UPDATE_TEAM_NAME = "UPDATE_TEAM_NAME";
const UPDATE_SPORT_TYPE = "UPDATE_SPORT_TYPE";
const UPDATE_POSITION = "UPDATE_POSITION";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_HOMETOWN = "UPDATE_HOMETOWN";
const UPDATE_TEAMS = "UPDATE_TEAMS";

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return Object.assign({}, state, { player_name: action.payload });
    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.payload });
    case UPDATE_TEAM_NAME:
      return Object.assign({}, state, { team_name: action.payload });
    case UPDATE_SPORT_TYPE:
      return Object.assign({}, state, { sports: action.payload });
    case UPDATE_POSITION:
      return Object.assign({}, state, { position: action.payload });
    case UPDATE_GENDER:
      return Object.assign({}, state, { gender: action.payload });
    case UPDATE_AGE:
      return Object.assign({}, state, { age: action.payload });
    case UPDATE_HOMETOWN:
      return Object.assign({}, state, { hometown: action.payload });
    case `${UPDATE_TEAMS}_FULFILLED`:
      return Object.assign({}, state, { teams: action.payload.data });
    default:
      return state;
  }
}

export function updatePlayerName(player_name) {
  return {
    type: UPDATE_PLAYER_NAME,
    payload: player_name
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  };
}

export function updateTeamName(team_name) {
  return {
    type: UPDATE_TEAM_NAME,
    payload: team_name
  };
}

export function updateSports(sport_type) {
  return {
    type: UPDATE_SPORT_TYPE,
    payload: sport_type
  };
}

export function updatePosition(position) {
  return {
    type: UPDATE_POSITION,
    payload: position
  };
}

export function updateGender(gender) {
  return {
    type: UPDATE_GENDER,
    payload: gender
  };
}

export function updateAge(age) {
  return {
    type: UPDATE_AGE,
    payload: age
  };
}

export function updateHometown(hometown) {
  return {
    type: UPDATE_HOMETOWN,
    payload: hometown
  };
}

export function updateTeams() {
  return {
    type: UPDATE_TEAMS,
    payload: axios.get("/teams")
  };
}

export default registerReducer;
