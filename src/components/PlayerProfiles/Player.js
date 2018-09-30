import React, { Component } from "react";
import "./Player.css";
import Edit from "./Edit";
import axios from "axios";
import Registration from "../Registration/Registration";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo } from "../../ducks/get_reducer";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      profileImg: []
    };
    this.updateProfilePic = this.updateProfilePic.bind(this);
  }

  componentDidMount() {
    this.props.updateSportsInfo();
    axios.get("/profile/images").then(response => {
      this.setState({ profileImg: response.data });
    });
  }

  updateProfilePic(e) {
    this.setState({
      profileImg: e.target.value
    });
  }

  render() {
    let { profileImg } = this.state;

    let profilePic =
      profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;

    let coverPic =
      profileImg.length > 0 ? profileImg[profileImg.length - 2] : null;

    let { sportsInfo } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    let player = arr.map((e, i) => {
      return (
        <div className="playerspacer" key={i}>
          <div key={i} id="profilecard">
            <div className="picturedivonprofile">
              <img
                alt=""
                src={
                  !coverPic ? null : coverPic.avatar ? null : profilePic.avatar
                }
                className="profilepicture"
              />
            </div>
            <h1 id="playerName">{e.player_name}</h1>
            <div className="teamleaguelinks">
              <Link to="/team" className="playerpagelink">
                <h3 className="team">TEAM: {e.team_name}</h3>
              </Link>
              <Link to="/league" className="playerpagelink">
                <h3 className="league">LEAGUE: {e.league_name}</h3>
              </Link>
            </div>
          </div>
          <div className="playerprofileinfo">
            <img
              alt=""
              src="https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
              className="playerprofileinfopic"
            />
            <p className="info">
              HOMETOWN: {e.hometown}
              <br />
              SPORT: {e.sport_type}
              <br />
              POSITION: {e.position}
              <br />
              AGE: {e.age}
            </p>
            <img
              alt=""
              src="https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
              className="playerprofileinfopic"
            />
          </div>
          <div className="aboutplayer">
            <h3>About {e.player_name}</h3>
            <p>
              {/* {e.about} */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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

    console.log(profilePic);
    console.log(coverPic);

    return (
      <div id="playerprofilepage">
        {this.props.sportsInfo.auth_id ? (
          <div id="playerCard">
            <Carousel>
              <div>
                <img
                  alt=""
                  src={
                    !profilePic
                      ? null
                      : profilePic.image
                        ? null
                        : coverPic.image
                  }
                />
              </div>
              {/* <div>
                <img alt="" src={!coverPhoto2 ? null : coverPhoto2.image} />
              </div>
              <div>
                <img alt="" src={coverPhoto2} />
              </div> */}
            </Carousel>
            {player}
          </div>
        ) : (
          <Registration />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo }
)(Player);
