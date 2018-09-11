const initialState = {
  player_name: "",
  team_name: "",
  sports: "",
  position: "",
  league_name: "",
  gender: "",
  age: 0,
  hometown: ""
};

const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
const UPDATE_TEAM_NAME = "UPDATE_TEAM_NAME";
const UPDATE_SPORTS = "UPDATE_SPORTS";
const UPDATE_POSITION = "UPDATE_POSITION";
const UPDATE_LEAGUE_NAME = "UPDATE_LEAGUE_NAME";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_HOMETOWN = "UPDATE_HOMETOWN";

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return Object.assign({}, state, { player_name: action.payload });
    case UPDATE_TEAM_NAME:
      return Object.assign({}, state, { team_name: action.payload });
    case UPDATE_SPORTS:
      return Object.assign({}, state, { sports: action.payload });
    case UPDATE_POSITION:
      return Object.assign({}, state, { position: action.payload });
    case UPDATE_LEAGUE_NAME:
      return Object.assign({}, state, { league_name: action.payload });
    case UPDATE_GENDER:
      return Object.assign({}, state, { gender: action.payload });
    case UPDATE_AGE:
      return Object.assign({}, state, { age: action.payload });
    case UPDATE_HOMETOWN:
      return Object.assign({}, state, { hometown: action.payload });
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

export function updateTeamName(team_name) {
  return {
    type: UPDATE_TEAM_NAME,
    payload: team_name
  };
}

export function updateSports(sports) {
  return {
    type: UPDATE_SPORTS,
    payload: sports
  };
}

export function updatePosition(position) {
  return {
    type: UPDATE_POSITION,
    payload: position
  };
}

export function updateLeagueName(league_name) {
  return {
    type: UPDATE_LEAGUE_NAME,
    payload: league_name
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

export default registerReducer;
