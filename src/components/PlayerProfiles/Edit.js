import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { updateSportsInfo } from "../../ducks/get_reducer";
import { Link } from "react-router-dom";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this.showEdit = this.showEdit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateHometown = this.updateHometown.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  componentDidMount() {
    this.props.updateSportsInfo();
  }

  updateName(e) {
    this.setState({
      player_name: e.target.value
    });
  }
  updateAge(e) {
    this.setState({
      age: e.target.value
    });
  }
  updatePosition(e) {
    this.setState({
      position: e.target.value
    });
  }
  updateHometown(e) {
    this.setState({
      hometown: e.target.value
    });
  }
  updateSport(e) {
    this.setState({
      sport_type: e.target.value
    });
  }

  updateInfo(id, body) {
    axios
      .put(`/playerInfo/${id}`, { body })
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err, "post err (PLAYER 48)"));
    window.location.reload(false);
    this.showEdit();
  }

  deleteProfile(id) {
    axios
      .delete(`/playerInfo/${id}`)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err, "delete error"));
  }

  showEdit() {
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    const { sportsInfo } = this.props;

    return (
      <div>
        <button onClick={() => this.showEdit()}>Edit Profile</button>

        {this.state.editMode === true ? (
          <div>
            <input
              name={sportsInfo.player_name}
              placeholder="Player Name"
              onChange={e => this.updateName(e)}
            />

            <input
              name={sportsInfo.hometown}
              placeholder="Hometown"
              onChange={e => this.updateHometown(e)}
            />
            <input
              name={sportsInfo.sport_type}
              placeholder="Sports"
              onChange={e => this.updateSport(e)}
            />
            <input
              name={sportsInfo.age}
              placeholder="Age"
              onChange={e => this.updateAge(e)}
            />
            <input
              name={sportsInfo.position}
              placeholder="Position"
              onChange={e => this.updatePosition(e)}
            />

            <button
              onClick={() =>
                this.updateInfo(sportsInfo.auth_id, {
                  player_name: this.state.player_name,
                  hometown: this.state.hometown,
                  sport_type: this.state.sport_type,
                  age: this.state.age,
                  position: this.state.position
                })
              }
            >
              Save Changes
            </button>

            <div>
              <Link to="/">
                <button onClick={() => this.deleteProfile(sportsInfo.auth_id)}>
                  DELETE PROFILE
                </button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  {
    updateSportsInfo
  }
)(Edit);
