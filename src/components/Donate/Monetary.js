import React, { Component } from "react";
import "./Monetary.css";
import Checkout from "./Checkout";
import axios from "axios";
// import { Link } from "react-router-dom";

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
        <h1 id="monetary">DONATE</h1>
        <br />
        <div className="form">
          <input
            name="firstName"
            onChange={e => this.handleChange(e)}
            placeholder="First Name"
          />
          <input
            name="lastName"
            onChange={e => this.handleChange(e)}
            placeholder="Last Name"
          />
          <input
            name="email"
            onChange={e => this.handleChange(e)}
            placeholder="Email"
          />
          <input
            name="teamName"
            onChange={e => this.handleChange(e)}
            placeholder="Team Name"
          />
          <input
            name="city"
            onChange={e => this.handleChange(e)}
            placeholder="City"
          />
          <input
            name="state"
            onChange={e => this.handleChange(e)}
            placeholder="State"
          />
          <input
            name="amount"
            onChange={e => this.handleChange(e)}
            placeholder="Amount"
          />
          <div onClick={() => this.onSubmit()} className="checkout">
            <Checkout
              name={"Thank you for your donation!"}
              description={"description"}
              amount={this.state.amount}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Monetary;
