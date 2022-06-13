import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo } from "../../ducks/get_reducer";
import { Carousel } from "react-responsive-carousel";
import Registration from "../Registration/Registration";
import Edit from "./Edit";
import "./Player.css";
import "./Carousel.css";

const Player = () => {
    const [editMode, setEditMode] = useState(false);
    const [profileImg, setProfileImg] = useState([]);

    useEffect(async () => {
        // props.updateSportsInfo();
        // await axios.get("/profile/images").then(response => {
        //   setProfileImg(response.data);
        // })
    }, []);

    let player = props.sportsInfo.map((e, i) => {
        return (
            <div className="playerspacer" key={i}>
                <div key={i} id="profilecard">
                    <div className="picturedivonprofile">
                        <img alt="" src={""} className="profilepicture" />
                    </div>
                    <h6 id="playernameonprofile">{e.player_name}</h6>
                    <div className="teamleaguelinks">
                        <Link to="/team" className="playerpagelink">
                            <h3 className="team">
                                TEAM: <br /> {e.team_name}
                            </h3>
                        </Link>
                        <Link to="/league" className="playerpagelink">
                            <h3 className="league">
                                LEAGUE: <br />
                                {e.league_name}
                            </h3>
                        </Link>
                    </div>
                </div>
                <div className="playerprofileinfo">
                    <p className="info">
                        HOMETOWN: {e.hometown}
                        <br />
                        SPORT: {e.sport_type}
                        <br />
                        POSITION: {e.position}
                        <br />
                        AGE: {e.age}
                    </p>
                </div>
                <div className="aboutplayer">
                    <h3 className="aboutplayertitle">About {e.player_name}</h3>
                    <p className="aboutplayersection">
                        {e.about}I am a 25 year old, former football player from
                        Savannah, Ga. I graduated from Dartmouth College in 2015
                        and am an aspiring full-stack developer. I enjoy any and
                        all sports but if I had to chose football, basketball,
                        and golf would have to be my top choices.
                    </p>
                </div>
                <div>
                    <Edit
                        updateProfilePic={this.updateProfilePic}
                        profileImg={this.state.profileImg}
                    />
                </div>
            </div>
        );
    });

    return (
        <div id="playerprofilepage">
            {props.sportsInfo.auth_id ? (
                <div id="playerCard">
                    <Carousel>
                        <div>
                            <img alt="" src={""} />
                        </div>
                    </Carousel>
                    {player}
                </div>
            ) : (
                <Registration />
            )}
        </div>
    );
};

const mapStateToProps = ({ state }) => ({
    ...state,
});

export default connect(mapStateToProps, { updateSportsInfo })(Player);
