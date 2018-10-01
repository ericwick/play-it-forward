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

  async componentDidMount() {
    this.props.updateSportsInfo();
    await axios.get("/profile/images").then(response => {
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

    let avatarPicture = () => {
      let avatar2 = !profilePic ? null : profilePic.avatar;
      let avatar1 = !coverPic ? null : coverPic.avatar;
      console.log(avatar1);
      console.log(avatar2);

      if (avatar1 === null) {
        return avatar2;
      } else {
        return avatar1;
      }
    };

    let coverPicture = () => {
      let cover2 = !profilePic ? null : profilePic.image;
      let cover1 = !coverPic ? null : coverPic.image;
      console.log(cover1);
      console.log(cover2);

      if (cover1 === null) {
        return cover2;
      } else {
        return cover1;
      }
    };

    let { sportsInfo } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    let player = arr.map((e, i) => {
      return (
        <div className="playerspacer" key={i}>
          <div key={i} id="profilecard">
            <div className="picturedivonprofile">
              <img alt="" src={avatarPicture()} className="profilepicture" />
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
            <img
              alt=""
              src="https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
              className="playerprofileinfopic"
              id="playerprofileinfopicleft"
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
              id="playerprofileinfopicright"
            />
          </div>
          <div className="aboutplayer">
            <h3 className="aboutplayertitle">About {e.player_name}</h3>
            <p className="aboutplayersection">
              {/* {e.about} */}I am a 25 year old, former football player from
              Savannah, Ga. I graduated from Dartmouth College in 2015 and am an
              aspiring full-stack developer. I enjoy any and all sports but if I
              had to chose football, basketball, and golf would have to be my
              top choices.
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
                <img alt="" src={coverPicture()} />
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
