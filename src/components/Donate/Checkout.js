import React, { Component } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import axios from "axios";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      amount: 0,
      firstName: "",
      lastName: "",
      email: ""
    };
    this.submit = this.submit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  async submit(e) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await axios.post("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id,
      amount: this.state.amount,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email
    });
    if (response.ok) {
      this.setState({ complete: true });
    }
  }

  render() {
    if (this.state.complete) {
      return <h1>Purchase Complete</h1>;
    }

    return (
      <div>
        <p>Would you like to complete the purchase?</p>
        <input
          name={this.state.amount}
          onChange={e => this.handleChange(e)}
          placeholder="Amount"
        />
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
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

export default injectStripe(Checkout);
