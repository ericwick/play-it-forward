import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.onSaveChanges = this.onSaveChanges.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSaveChanges(id, body) {
    this.props.updateInfo();
  }

  render() {
    let {
      player_name,
      position,
      age,
      hometown,
      sport_type
    } = this.props.sportsInfo;
    let { sportsInfo } = this.props;

    return (
      <div>
        <button onClick={this.props.toggleEdit}>Edit Profile</button>

        {this.props.showEdit && sportsInfo ? (
          <div>
            <form>
              <input
                type="text"
                name={player_name}
                placeholder="Player Name"
                onChange={e => this.handleChange(e)}
              />

              <input
                type="text"
                name={hometown}
                placeholder="Hometown"
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name={sport_type}
                placeholder="Sports"
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name={age}
                placeholder="Age"
                onChange={e => this.handleChange(e)}
              />
              <input
                type="text"
                name={position}
                placeholder="Position"
                onChange={e => this.handleChange(e)}
              />

              <Link to="/player">
                <button
                  onClick={
                    this.onSaveChanges(sportsInfo.player_name, sportsInfo)
                    // {this.props.toggleEdit()}
                  }
                >
                  Save Changes
                </button>
              </Link>
            </form>
          </div>
        ) : null}
      </div>
    );
  }
}
