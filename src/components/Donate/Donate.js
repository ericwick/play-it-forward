import React, { Component } from "react";
import "../Donate/Donate.css";
import { Link } from "react-router-dom";
import pic from "./tennisdonate.png";
import Social from "../Home/Social";

class Donate extends Component {
  constructor() {
    super();
    this.state = {
      picture: pic
    };
  }
  render() {
    // src = "http://wolfcreekcompany.com/wp-content/uploads/2017/05/huddle.jpg";
    // src =
    //   "http://i0.wp.com/www.floridafitnessconcepts.com/wp-content/uploads/2013/12/sports-conditioning.jpg?fit=900%2C587";
    return (
      <div className="donatepage">
        <Social />
        <div className="donatepicandtitle">
          <img
            alt=""
            src={this.state.picture}
            className="donationspagepicture"
          />
        </div>
        <h1 className="donation" id="homedonate">
          DONATE
        </h1>
        <h3 className="donatetopiftitle">Donate to Play It Forward</h3>
        <p className="donationdescription">
          Play It Forward is a national, nonprofit organization inspired by the
          universal desire to become the best verison of yourself. Our members
          are our power, and your support allows us to work toward a nation
          where kids of any age are able to participate in any sport they want
          regardless of their socioeconomic status. Play It Forward wants to
          afford everyone who is able to Play the opportunity to Play. The
          registration contributions from the adult leagues help make the kids'
          leagues possible, but any additional efforts help the leagues thrive
          and provide an exceptional experience for the children.
        </p>
        <br />
        <div className="donationbuttons">
          <Link to="/monetary" className="givebackbuttons">
            <div className="donatemoneybutton">Help Raise Funds</div>
          </Link>

          <Link to="/physical" className="givebackbuttons">
            <div className="donatephysicalbutton">Send Equipment</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Donate;
