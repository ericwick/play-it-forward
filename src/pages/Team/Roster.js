import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { updateTeam } from "../../ducks/get_reducer";
// import "./Team.css";

const Roster = (props) => {
    const [cardFlip, setCardFlip] = useState(false);

    useEffect(() => {
        // props.updateTeam();
    }, []);

    const handleCardFlip = (id) => {
        setCardFlip(!cardFlip);
    };

    let roster = props.team.map((e, i) => {
        return !cardFlip ? (
            <div
                key={e.player_id}
                className="playerCarddiv"
                onClick={() => this.handleCardFlip(e.player_id)}
            >
                <div className="playerCardinnerdiv">
                    <img
                        src={e.profile_pic}
                        alt=""
                        className="playercardpicture"
                    />
                    <h5 className="playerNametitle">{e.player_name}</h5>
                    <h6 className="positionh6">{e.position}</h6>
                </div>
            </div>
        ) : (
            <div
                className="playercontentdiv"
                onClick={() => this.handleCardFlip(e.player_id)}
            >
                <div className="playerCardbackinnerdiv" />
                <p className="playerInfooncard">
                    HOMETOWN: {e.hometown}
                    <br />
                    AGE: {e.age}
                    <br />
                </p>
            </div>
        );
    });

    return <div className="rosterdisplay">{roster}</div>;
};

const mapStateToProps = (state) => ({ ...state.getReducer });

export default connect(mapStateToProps, { updateTeam })(Roster);
