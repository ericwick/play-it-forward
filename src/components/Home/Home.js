import React, { Component } from "react";
import "./Home.css";
// import Helmet from "react-helmet";
import YouTube from "react-youtube";
import AdultButton from "../AdultLeague/AdultButton";
import KidButton from "../KidLeague/KidButton";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.mute();
  }

  _onEnd(event) {
    event.target.playVideo();
  }

  render() {
    const videoOptions = {
      playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };

    return (
      <div>
        <div className="title">
          <div className="video-background">
            <div className="video-foreground">
              <h1>PLAY IT FORWARD</h1>
              <YouTube
                videoId="Jdwp29ECg4k"
                opts={videoOptions}
                className="video-iframe"
                onReady={this._onReady}
                onEnd={this._onEnd}
              />
            </div>
          </div>
        </div>

        <div className="buttons">
          <KidButton />
          <AdultButton />
        </div>
      </div>
    );
  }
}

export default Home;
