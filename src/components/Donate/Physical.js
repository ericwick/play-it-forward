import React, { Component } from "react";
import "../Donate/Donate.css";

class Physical extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="donate">
        <h1 className="donation">DONATIONS</h1>
        <p>
          There are a lot of ways to contribute to successful youth programs
          besides opening up your wallet. If you have any extra sports equipment
          of any kind that can put to use, please send it to the address below!
        </p>
        <br />

        <div>
          <h3>500 S Ervay Street, Dallas, TX 75201</h3>
        </div>
      </div>
    );
  }
}

export default Physical;
