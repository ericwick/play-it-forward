import React, { Component } from "react";
import "./Team.css";
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

  handleCardFlip() {
    this.setState({
      cardflip: !this.state.cardflip
    });
  }

  render() {
    let { team } = this.props;
    let { cardflip } = this.state;

    let roster = team.map((e, i) => {
      return !cardflip ? (
        <div
          key={i}
          className="playerCarddiv"
          onClick={i => this.handleCardFlip(i)}
        >
          <div className="playerCardinnerdiv">
            <img src={e.profile_pic} alt="" className="playercardpicture" />
            <h5 className="playerNametitle">{e.player_name}</h5>
            <h6 className="positionh6">{e.position}</h6>
          </div>
        </div>
      ) : (
        <div className="playercontentdiv" onClick={i => this.handleCardFlip(i)}>
          <div className="playerCardbackinnerdiv" />
          <p className="playerInfooncard">
            HOMETOWN: {e.hometown}
            <br />
            AGE: {e.age}
            <br />
            STATS:
            <span>Tackles: 70</span>
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
