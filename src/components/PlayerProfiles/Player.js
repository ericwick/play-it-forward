import React, { Component } from "react";
import axios from "axios";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }

  componentDidMount() {
    axios.get("/player").then(res => {
      console.log(res);
      this.setState({
        player: res
      });
    });
  }

  render() {
    console.log(this.state.player);
    return (
      <div>
        <h4>PLAYER PROFILE</h4>
      </div>
    );
  }
}

export default Player;
