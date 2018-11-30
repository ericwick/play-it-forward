import React, { Component } from "react";
// import "../Donate/Donate.css";
// import Social from "../Home/Social";

class Physical extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="donate">
        {/* <Social /> */}
        {/* <img
          alt=""
          src="https://clicklovegrow.com/wp-content/new_folder/2015/06/20140601-_A0A1870-1024x683.jpg"
          className="physicaldonationdiv"
        /> */}
        <h1 className="physicaldonationtitle">DONATIONS</h1>
        <p className="inputfield">
          There are a lot of ways to contribute to successful youth programs
          besides opening up your wallet. If you have any extra sports equipment
          of any kind that can be put to use, please send it to the address
          below!
          <h3 id="physicaldonationaddress">
            500 S Ervay Street, Dallas, TX 75201
          </h3>
        </p>
        <br />

        <div className="recommendations">
          <h3 id="donationsuggestions">Equipment Suggestions By Sport</h3>

          <div className="recommendationsbysport">
            <p className="inputfield" id="inputfield">
              <h5 id="sporttypedonate">(Flag) Football</h5>
              <ul id="suggestions">
                <li>Cleats</li>
                <li>Footballs</li>
                <li>Cones</li>
                <li>Padding</li>
                <li>Shoulder Pads</li>
                <li>Knee, Thigh, Hip Pads</li>
                <li>Gloves</li>
                <li>Flags (flag football)</li>
              </ul>
            </p>
            <p className="inputfield" id="inputfield">
              <h5 id="sporttypedonate">Soccer</h5>
              <ul id="suggestions">
                <li>Cleats</li>
                <li>Soccer Balls</li>
                <li>Cones</li>
                <li>Shin Guards</li>
                <li>Goalie Gloves</li>
              </ul>
            </p>
            <p className="inputfield" id="inputfield">
              <h5 id="sporttypedonate">Basketball</h5>
              <ul id="suggestions">
                <li>Shoes</li>
                <li>Basketballs</li>
                <li>Cones</li>
              </ul>
            </p>
            <p className="inputfield" id="inputfield">
              <h5 id="sporttypedonate">Baseball/Softball</h5>
              <ul id="suggestions">
                <li>Cleats</li>
                <li>Baseballs/Softballs</li>
                <li>Cones</li>
                <li>Gloves</li>
                <li>Bats (metal)</li>
                <li>Helmets</li>
              </ul>
            </p>
            <p className="inputfield" id="inputfield">
              <h5 id="sporttypedonate">Volleyball</h5>
              <ul id="suggestions">
                <li>Tennis Shoes</li>
                <li>Volleyballs</li>
                <li>Cones</li>
                <li>Knee Pads</li>
              </ul>
            </p>
            <p className="inputfield" id="inputfield">
              <h5 id="sporttypedonate">Tennis</h5>
              <ul id="suggestions">
                <li>Tennis Shoes</li>
                <li>Tennis Balls</li>
                <li>Rackets</li>
              </ul>
            </p>
            <p className="inputfield" id="inputfield">
              <h5 id="sporttypedonate">Kickball</h5>
              <ul id="suggestions">
                <li>Kickballs</li>
              </ul>
            </p>
          </div>
        </div>
        <h1 className="thanksfordonating">
          THANK YOU FOR DONATING TO PLAY IT FORWARD!
        </h1>
      </div>
    );
  }
}

export default Physical;
