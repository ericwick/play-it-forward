import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false
    };
    this.showEdit = this.showEdit.bind(this);
    this.hideEdit = this.hideEdit.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateHometown = this.updateHometown.bind(this);
    this.updateSports = this.updateSports.bind(this);
    this.updateInfo = this.updateInfo.bind(this);
  }

  updateName(e) {
    this.setState({
      player_name: e.target.value
    });
  }
  updateHometown(e) {
    this.setState({
      hometown: e.target.value
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
  updateSports(e) {
    this.setState({
      sport_type: e.target.value
    });
  }

  updateInfo(auth_id, { player_name, hometown, position, age, sport_type }) {
    axios
      .put(`/playerInfo/${auth_id}`, {
        player_name,
        hometown,
        position,
        age,
        sport_type
      })
      .then(response => {
        this.setState({
          player_name: response.data,
          hometown: response.data,
          position: response.data,
          age: response.data,
          sport_type: response.data
        });
      })
      .catch(err => console.log(err, "post err (PLAYER 48)"));
    this.hideEdit();
  }

  showEdit() {
    this.setState({ editMode: true });
  }

  hideEdit() {
    this.setState({ editMode: false });
  }

  render() {
    let { showEdit } = this.props;

    return (
      <div>
        <button onClick={showEdit}>Edit Profile</button>

        {/* {showEdit ? ( */}
        <div>
          <form>
            <input
              // name={player_name}
              placeholder="Player Name"
              onChange={e => this.updateName(e)}
            />

            <input
              // name={hometown}
              placeholder="Hometown"
              onChange={e => this.updateHometown(e)}
            />
            <input
              // name={sport_type}
              placeholder="Sports"
              onChange={e => this.updateSports(e)}
            />
            <input
              // name={age}
              placeholder="Age"
              onChange={e => this.updateAge(e)}
            />
            <input
              // name={position}
              placeholder="Position"
              onChange={e => this.updatePosition(e)}
            />

            <button onClick={() => this.updateInfo()}>Save Changes</button>
          </form>
        </div>
        {/* ) : null} */}
      </div>
    );
  }
}

// const mapStateToProps = state => ({ ...state.getReducer });

// export default connect(
//   mapStateToProps,
//   {
//     updatePlayerName,
//     updateSports,
//     updatePosition,
//     updateAge,
//     updateHometown
//   }
// )(Edit);
