import React, { Component } from "react";
import "./Player.css";
import Edit from "./Edit";
import Registration from "../Registration/Registration";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo } from "../../ducks/get_reducer";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";
import firebase from "firebase";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
      profileImg: ""
    };
    this.updateProfilePic = this.updateProfilePic.bind(this);
  }

  componentDidMount() {
    this.props.updateSportsInfo();
  }

  updateProfilePic(e) {
    this.setState({
      profileImg: e.target.value
    });
  }

  render() {
    let { sportsInfo } = this.props;
    console.log(sportsInfo);
    let arr = [];
    arr.push(sportsInfo);

    let player = arr.map((e, i) => {
      return (
        <div className="playerspacer">
          <div key={i} id="profilecard">
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
        {this.props.sportsInfo.hometown ? (
          <div id="playerCard">
            <Carousel>
              <div>
                <img
                  src="https://media.gettyimages.com/photos/mariano-rivera-of-the-new-york-yankees-walks-out-of-the-bullpen-the-picture-id463129333"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cdn-s3.si.com/s3fs-public/images/3-chuck-bednarik-1960-fs.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="http://i.timeinc.net/time/newsfiles/sports/lead.jpg"
                  alt=""
                />
              </div>
            </Carousel>
            <img src={this.state.profileImg} id="profilepic" alt="" />
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
