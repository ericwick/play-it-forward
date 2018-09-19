import React, { Component } from "react";
import "../Donate/Donate.css";
import Payment from "./Payment";
import axios from "axios";
import { Link } from "react-router-dom";

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
      .post("/donate/payment", {
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
    return (
      <div className="donate">
        <h1>DONATE</h1>
        <input
          name={this.state.firstName}
          onChange={e => this.handleChange(e)}
          placeholder="First Name"
        />
        <input
          name={this.state.lastName}
          onChange={e => this.handleChange(e)}
          placeholder="Last Name"
        />
        <input
          name={this.state.email}
          onChange={e => this.handleChange(e)}
          placeholder="Email"
        />
        <input
          name={this.state.teamName}
          onChange={e => this.handleChange(e)}
          placeholder="Team Name"
        />
        <input
          name={this.state.city}
          onChange={e => this.handleChange(e)}
          placeholder="City"
        />
        <input
          name={this.state.state}
          onChange={e => this.handleChange(e)}
          placeholder="State"
        />
        <input
          name={this.state.amount}
          onChange={e => this.handleChange(e)}
          placeholder="Amount"
        />

        {/* PUT THIS IN ANOTHER COMPONENT (LIKE A WIZARD) AND HAVE THE NEXT BUTTON PUSH THE USERS DATA TO POSTGRES */}
        <Link to="/checkout">
          <button onSubmit={() => this.onSubmit()}>Proceed to Payment</button>
        </Link>
        <Payment amount={this.state.amount} />
      </div>
    );
  }
}

export default Monetary;
