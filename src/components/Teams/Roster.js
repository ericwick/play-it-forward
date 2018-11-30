import React, { Component } from "react";
// import "./Team.css";
import { connect } from "react-redux";
import { updateTeam } from "../../ducks/get_reducer";

class Roster extends Component {
  constructor() {
    super();
    this.state = {
      cardflip: false
    };
    this.handleCardFlip = this.handleCardFlip.bind(this);
  }

  componentDidMount() {
    this.props.updateTeam();
  }

  handleCardFlip(id) {
    this.setState({
      cardflip: !this.state.cardflip
    });
  }

  render() {
    console.log(this.props.team);
    let { team } = this.props;
    let { cardflip } = this.state;

    let roster = team.map((e, i) => {
      return !cardflip ? (
        <div
          key={e.player_id}
          className="playerCarddiv"
          onClick={player_id => this.handleCardFlip(e.player_id)}
        >
          <div className="playerCardinnerdiv">
            <img src={e.profile_pic} alt="" className="playercardpicture" />
            <h5 className="playerNametitle">{e.player_name}</h5>
            <h6 className="positionh6">{e.position}</h6>
          </div>
        </div>
      ) : (
        <div
          className="playercontentdiv"
          onClick={player_id => this.handleCardFlip(e.player_id)}
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
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateTeam }
)(Roster);
