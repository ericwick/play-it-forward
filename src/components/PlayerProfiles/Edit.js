import React, { Component } from "react";
import axios from "axios";

export default class Edit extends Component {
  constructor() {
    super();
    this.state = {
      img: "",
      image: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      img: e.target.value
    });
  }

  handleClick(img) {
    axios.post("/postimage", { img }).then(response => {
      console.log(response);
      this.setState({
        image: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <h1>EDIT YA STUFFS</h1>
        <div>
          <p>Player_name Hometown Sport Age Add Image Add Video</p>
          <input onChange={e => this.handleChange(e)} />
          <button onClick={this.handleClick}>Submit</button>
        </div>
      </div>
    );
  }
}
