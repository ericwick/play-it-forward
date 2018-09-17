const initialState = {
  player_name: "",
  sport_type: "",
  position: "",
  age: 0,
  hometown: "",
  auth_id: ""
};

const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
const UPDATE_SPORT_TYPE = "UPDATE_SPORT_TYPE";
const UPDATE_POSITION = "UPDATE_POSITION";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_HOMETOWN = "UPDATE_HOMETOWN";

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PLAYER_NAME:
      return Object.assign({}, state, { player_name: action.payload });

    case UPDATE_SPORT_TYPE:
      return Object.assign({}, state, { sports: action.payload });
    case UPDATE_POSITION:
      return Object.assign({}, state, { position: action.payload });

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
