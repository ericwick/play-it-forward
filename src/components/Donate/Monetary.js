import React, { Component } from "react";
// import "./Monetary.css";
import Checkout from "./Checkout";
import axios from "axios";
// import Social from "../Home/Social";

class Monetary extends Component {
  constructor() {
    super();
    this.state = {
      amount: 0,
      firstName: "",
      lastName: "",
      teamName: "",
      email: "",
      city: "",
      state: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit() {
    let {
      firstName,
      lastName,
      amount,
      teamName,
      email,
      city,
      state
    } = this.state;
    axios
      .post("/donate/paymentInfo", {
        firstName,
        lastName,
        amount,
        teamName,
        email,
        city,
        state
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state);
    return (
      <div className="donate">
        {/* <Social /> */}
        {/* <img
          alt=""
          src="http://www.zocalopublicsquare.org/wp-content/uploads/2012/09/Touchdown-600x399.jpg"
          className="monetarypagepic"
        /> */}
        <p className="inputfield" id="instructions">
          Please enter your information below and then follow the prompts on the
          pop-up to complete your donation.
        </p>
        <h1 id="monetary">DONATE</h1>
        <br />
        <div className="form">
          <input
            name="firstName"
            onChange={e => this.handleChange(e)}
            placeholder="First Name"
            className="inputfield"
            id="firstname"
          />
          <input
            name="lastName"
            onChange={e => this.handleChange(e)}
            placeholder="Last Name"
            className="inputfield"
            id="lastname"
          />
          <input
            name="email"
            onChange={e => this.handleChange(e)}
            placeholder="Email"
            className="inputfield"
            id="email"
          />
          <input
            name="teamName"
            onChange={e => this.handleChange(e)}
            placeholder="Team Name"
            className="inputfield"
            id="teamname"
          />
          <input
            name="city"
            onChange={e => this.handleChange(e)}
            placeholder="City"
            className="inputfield"
            id="city"
          />
          <input
            name="state"
            onChange={e => this.handleChange(e)}
            placeholder="State"
            className="inputfield"
            id="state"
          />
          <input
            name="amount"
            onChange={e => this.handleChange(e)}
            placeholder="Amount"
            className="inputfield"
            id="amount"
          />
          <div onClick={() => this.onSubmit()} className="checkout">
            <Checkout
              name={"Thank you for your donation!"}
              description={"Donate to Play It Forward"}
              amount={this.state.amount}
            />
          </div>
        </div>
        <h1 className="thanksfordonating">
          THANK YOU FOR DONATING TO PLAY IT FORWARD!
        </h1>
      </div>
    );
  }
}

export default Monetary;
