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

    console.log(profileImg);

    let coverPhoto1 =
      profileImg.length > 0 ? profileImg[profileImg.length - 1] : null;
    let coverPhoto2 =
      profileImg.length > 0 && profileImg.length - 1 !== coverPhoto1
        ? profileImg[profileImg.length - 1]
        : null;
    let coverPhoto3 =
      profileImg.length > 0 &&
      profileImg.length - 1 !== coverPhoto2 &&
      profileImg.length - 1 !== coverPhoto3
        ? profileImg[profileImg.length - 1]
        : null;

    console.log(coverPhoto1);
    console.log(coverPhoto2);
    console.log(coverPhoto3);

    // let coverPhotos = this.state.profileImg.map((e, i, arr) => {
    //   if (e.image !== null) {
    //     return <img src={e.image} alt="" className="coverphotoimg" />;
    //   }
    // });

    let { sportsInfo } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    let player = arr.map((e, i) => {
      return (
        <div className="playerspacer" key={i}>
          <div key={i} id="profilecard">
            <h1 id="playerName">{e.player_name}</h1>
            <div className="picturedivonprofile">
              <img
                alt=""
                src={!profilePic ? null : profilePic.avatar}
                className="profilepicture"
              />
            </div>
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

    return (
      <div id="playerprofilepage">
        {this.props.sportsInfo.auth_id ? (
          <div id="playerCard">
            <Carousel>
              <div>
                <img alt="" src={coverPhoto1} />
              </div>
              <div>
                <img alt="" src={coverPhoto2} />
              </div>
              <div>
                <img alt="" src={coverPhoto2} />
              </div>
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
