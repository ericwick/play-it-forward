import React, { Component } from "react";
import axios from "axios";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

export default class Chat extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    addResponseMessage(`Raider's Group Chat!`);
  }

  async handleNewUserMessage(newMessage) {
    await axios
      .post("/team/chat", { newMessage })
      .then(console.log(`New message! - ${newMessage}`));
    addResponseMessage();
  }

  render() {
    return (
      <div>
        <Widget
          handleNewUserMessage={JSON.stringify(this.handleNewUserMessage)}
          title="title"
          subtitle="subtitle"
        />
      </div>
    );
  }
}
