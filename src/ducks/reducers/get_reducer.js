import axios from "axios";

const initialState = {
    players: {},
    // teams: {},
    // leagues: {},
};

const GET_PLAYERS = "GET_PLAYERS";
// const GET_TEAMS = "GET_TEAMS";
// const GET_LEAGUES = "GET_LEAGUES";

export default function getReducer(state = initialState, action) {
    switch (action.type) {
        case `${GET_PLAYERS}_FULFILLED`:
            return {
                ...state,
                players: action.payload.data,
            };
        // case `${GET_TEAMS}_FULFILLED`:
        //     return {
        //         ...state,
        //         teams: action.payload.data,
        //     };
        // case `${GET_LEAGUES}_FULFILLED`:
        //     return {
        //         ...state,
        //         leagues: action.payload.data,
        //     };
        default:
            return state;
    }
}

export function getPlayers() {
    return {
        type: GET_PLAYERS,
        payload: axios.get("/players"),
    };
}

// export function getTeams() {
//     return {
//         type: GET_TEAMS,
//         payload: axios.get("/teams"),
//     };
// }

// export function getLeagues() {
//     return {
//         type: GET_LEAGUES,
//         payload: axios.get("/leagues"),
//     };
// }
