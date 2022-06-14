import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import { connect } from "react-redux";
import {
    getPlayers,
    // getLeagues,
    // getTeams,
} from "../../ducks/reducers/get_reducer";
import Login from "./Login";

const Home = (props) => {
    const [players, setPlayers] = useState({});
    const [teams, setTeams] = useState({});
    const [leagues, setLeagues] = useState({});

    useEffect(() => {
        setPlayers(props.getPlayers());
        // setTeams(props.getTeams());
        // setLeagues(props.getLeagues());
    }, []);

    // console.log("players", players);
    // console.log("teams", teams);
    // console.log("leagues", leagues);

    return (
        <div className="website">
            <h1 className="website-title">PLAY IT FORWARD</h1>
            {/* <Login /> */}
        </div>
    );
};

const mapStateToProps = (state) => ({ ...state.getReducer });

export default connect(mapStateToProps, {
    getPlayers,
    // getTeams,
    // getLeagues,
})(Home);
