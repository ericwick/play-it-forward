import React, { Component } from "react";
import axios from "axios";
// import Nav from "../NavBar/Nav";
// import Footer from "../Footer/Footer";
// import Edit from "./Edit";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateSportsInfo } from "../../ducks/get_reducer";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      // showEdit: false
    };
  }

  componentDidMount() {
    this.props.updateSportsInfo();
  }

  updateInfo(id, sportsInfo) {
    axios.put(`/playerInfo/${id}`, { sportsInfo }).then(response => {
      console.log(response);
      this.setState({
        sportsInfo: response.data
      });
    });
  }

  render() {
    let { sportsInfo } = this.props;
    let arr = [];
    arr.push(sportsInfo);

    let player = arr.map((e, i) => {
      return (
        <div key={i}>
          <h1>{e.player_name}</h1>
          {this.renderEditBox}
          <div>
            <Link to="/team">
              <h3>Team: {e.team_name}</h3>
            </Link>
            <Link to="/league">
              <h3>League: {e.league_name}</h3>
            </Link>
          </div>
          <p>
            Hometown: {e.hometown}
            <br />
            Sport: {e.sport_type}
            <br />
            Position: {e.position}
            <br />
            Age: {e.age}
          </p>
        </div>
      );
    });

    return (
      <div>
        <h2>PLAYER PROFILE</h2>
        <div>{player}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(
  mapStateToProps,
  { updateSportsInfo }
)(Player);

/* <Edit
  updateInfo={this.updateInfo}
  sportsInfo={sportsInfo}
  showEdit={this.state.showEdit}
  toggleEdit={() => {
    this.setState({ showEdit: !this.state.showEdit });
  }}
  /> */

// handleToggle() {
//   this.setState({
//     showEdit: !this.state.showEdit
//   });
// }

// handleChange(e) {
//   this.setState({
//     [e.target.name]: e.target.value
//   });
// }

// onSave() {
//   this.setState({
//     showEdit: false
//   });
// }

// renderEditBox() {
//   if (this.state.showEdit === "false") {
//     return (
//       <div>
//         <button onClick={this.handleToggle}>Edit</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <p>
//           <input onChange={this.handleChange} value={this.state.inputText} />
//           <button onClick={this.onSave}>Save</button>
//         </p>
//       </div>
//     );
//   }
// }

// renderButton() {
//   if (this.state.showEdit === false) {
//     return (
//       <div>
//         <button onClick={this.handleToggle}>Edit</button>
//       </div>
//     );
//   } else {
//     return (

//         <button onClick={this.onSave}>Save</button>
//       </div>
//     );
//   }
// }
