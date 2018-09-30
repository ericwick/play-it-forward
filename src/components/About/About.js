import React, { Component } from "react";
import "../About/About.css";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="aboutpage">
        <div className="aboutpagepicturediv">
          <img
            alt=""
            src="https://static1.squarespace.com/static/54f52b66e4b06c271d076bd9/55c3af1ae4b02956758c5ac2/55c3af3fe4b052f7e9bda55a/1438887744462/TheSeason-004.jpg?format=1000w"
            className="aboutpagepic"
          />
        </div>
        <h1 id="abouttitle">ABOUT</h1>
        <div className="aboutpageinformation">
          <p className="aboutplayitforward">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            pharetra vel turpis nunc eget lorem dolor sed. Enim ut sem viverra
            aliquet eget. Purus sit amet luctus venenatis lectus magna
            fringilla. At consectetur lorem donec massa sapien faucibus et
            molestie ac. Arcu bibendum at varius vel pharetra vel turpis. Ac
            feugiat sed lectus vestibulum mattis ullamcorper velit sed
            ullamcorper. Ultrices sagittis orci a scelerisque purus semper eget
            duis at. Sapien pellentesque habitant morbi tristique senectus et
            netus et. Pharetra massa massa ultricies mi. Cras ornare arcu dui
            vivamus arcu felis bibendum ut tristique. Arcu felis bibendum ut
            tristique et. Non odio euismod lacinia at quis risus sed. Eros donec
            ac odio tempor orci dapibus ultrices in iaculis. Velit dignissim
            sodales ut eu. Urna neque viverra justo nec ultrices dui sapien
            eget. Neque gravida in fermentum et sollicitudin ac orci. Duis ut
            diam quam nulla porttitor massa id neque aliquam. Et tortor at risus
            viverra adipiscing at. Pharetra massa massa ultricies mi. Fringilla
            phasellus faucibus scelerisque eleifend donec pretium vulputate. Sit
            amet consectetur adipiscing elit pellentesque habitant. Etiam erat
            velit scelerisque in dictum non consectetur a erat. Vitae tortor
            condimentum lacinia quis vel. Fringilla ut morbi tincidunt augue.
            Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
            Massa enim nec dui nunc mattis enim. Quam id leo in vitae turpis
            massa sed. Aliquam eleifend mi in nulla posuere sollicitudin. Eget
            egestas purus viverra accumsan in. Ut diam quam nulla porttitor
            massa id neque.
          </p>
          <p id="averageincomefaq">The average American income $31,786</p>
          <p id="averageincomefaq">
            The average American spends $2,292 per year per child on athletics
          </p>
        </div>
      </div>
    );
  }
}

export default About;
