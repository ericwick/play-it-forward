const initialState = {
  adultusername: "",
  adultpassword: "",
  kidusername: "",
  kidpassword: "",
  player_name: "",
  sports: "",
  location: "",
  team_name: "",
  league_name: "",
  gender: "",
  age: 0,
  hometown: ""
};

const UPDATE_ADULT_USERNAME = "UPDATE_ADULT_USERNAME";
const UPDATE_ADULT_PASSWORD = "UPDATE_ADULT_PASSWORD";
const UPDATE_KID_USERNAME = "UPDATE_KID_USERNAME";
const UPDATE_KID_PASSWORD = "UPDATE_KID_PASSWORD";
const UPDATE_PLAYER_NAME = "UPDATE_PLAYER_NAME";
const UPDATE_SPORTS = "UPDATE_SPORTS";
const UPDATE_LOCATION = "UPDATE_LOCATION";
const UPDATE_TEAM_NAME = "UPDATE_TEAM_NAME";
const UPDATE_LEAGUE_NAME = "UPDATE_LEAGUE_NAME";
const UPDATE_GENDER = "UPDATE_GENDER";
const UPDATE_AGE = "UPDATE_AGE";
const UPDATE_HOMETOWN = "UPDATE_HOMETOWN";

function registerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ADULT_USERNAME:
      return Object.assign({}, state, { adultusername: action.payload });
    case UPDATE_ADULT_PASSWORD:
      return Object.assign({}, state, { adultpassword: action.payload });
    case UPDATE_KID_USERNAME:
      return Object.assign({}, state, { kidusername: action.payload });
    case UPDATE_KID_PASSWORD:
      return Object.assign({}, state, { kidpassword: action.payload });
    case UPDATE_PLAYER_NAME:
      return Object.assign({}, state, { player_name: action.payload });
    case UPDATE_SPORTS:
      return Object.assign({}, state, { sports: action.payload });
    case UPDATE_TEAM_NAME:
      return Object.assign({}, state, { team_name: action.payload });
    case UPDATE_LOCATION:
      return Object.assign({}, state, { location: action.payload });
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

export function updateAdultUsername(adultusername) {
  return {
    type: UPDATE_ADULT_USERNAME,
    payload: adultusername
  };
}

export function updateAdultPassword(adultpassword) {
  return {
    type: UPDATE_ADULT_PASSWORD,
    payload: adultpassword
  };
}

export function updateKidUsername(kidusername) {
  return {
    type: UPDATE_KID_USERNAME,
    payload: kidusername
  };
}

export function updateKidPassword(kidpassword) {
  return {
    type: UPDATE_KID_PASSWORD,
    payload: kidpassword
  };
}

export function updatePlayerName(player_name) {
  return {
    type: UPDATE_PLAYER_NAME,
    payload: player_name
  };
}

export function updateSports(sports) {
  return {
    type: UPDATE_SPORTS,
    payload: sports
  };
}

export function updateLocation(location) {
  return {
    type: UPDATE_LOCATION,
    payload: location
  };
}

export function updateTeamName(team_name) {
  return {
    type: UPDATE_TEAM_NAME,
    payload: team_name
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
