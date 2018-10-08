import React, { Component } from "react";
import "../About/About.css";
import Social from "../Home/Social";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="aboutpage">
          <Social />
          <h1 id="abouttitle">ABOUT</h1>
          <div className="aboutpagepicturediv">
            <p className="aboutplayitforward">
              Play It Forward is a national, nonprofit organization inspired by
              the universal desire to become the best verison of yourself. Our
              members are our power, and your support allows us to work toward a
              nation where kids of any age are able to participate in any sport
              they want regardless of their socioeconomic status. Play It
              Forward wants to afford everyone who is able to Play the
              opportunity to Play. The registration contributions from the adult
              leagues help make the kids' leagues possible, but any additional
              efforts help the leagues thrive and provide an exceptional
              experience for the children.
            </p>
            <img
              alt=""
              src="https://static1.squarespace.com/static/54f52b66e4b06c271d076bd9/55c3af1ae4b02956758c5ac2/55c3af3fe4b052f7e9bda55a/1438887744462/TheSeason-004.jpg?format=1000w"
              className="aboutpagepic"
            />
          </div>
          {/* <div className="aboutpageinformation">
          </div> */}
          <div className="aboutpagefaq">
            <p id="averageincomefaq">The average American income $31,786</p>
            <img
              alt=""
              src="https://clip2art.com/images/drawn-arrow-transparent-background-13.png"
              className="playerprofileinfopic"
              id="aboutpagearrow"
            />
            <p id="averagesportfaq">
              The average American spends $2,292 per year per child on athletics
            </p>
          </div>
          <div className="aboutpagefaqbysport">
            <p className="sportcost" id="sportlax">
              <h5 className="sporttitletype">
                Lacrosse <br /> $7,956
              </h5>
            </p>
            <p className="sportcost" id="sporthockey">
              <h5 className="sporttitletype">
                Hockey <br /> $7,013
              </h5>
            </p>
            <p className="sportcost" id="sportbaseball">
              <h5 className="sporttitletype">
                Baseball
                <br /> $4,544
              </h5>
            </p>
            <p className="sportcost" id="sportfootball">
              <h5 className="sporttitletype">
                Football
                <br /> $2,739
              </h5>
            </p>
            <p className="sportcost" id="sportbasketball">
              <h5 className="sporttitletype">
                Basketball
                <br /> $4,044
              </h5>
            </p>
            <p className="sportcost" id="sportsoccer">
              <h5 className="sporttitletype">
                Soccer
                <br /> $1,172
              </h5>
            </p>
            <p className="sportcost" id="sportsoftball">
              <h5 className="sporttitletype">
                Softball
                <br /> $4,032
              </h5>
            </p>
            <p className="sportcost" id="sportvolley">
              <h5 className="sporttitletype">
                Volleyball
                <br /> $1,528
              </h5>
            </p>
            <p className="sportcost" id="sporttennis">
              <h5 className="sporttitletype">
                Tennis
                <br /> $3,103
              </h5>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
