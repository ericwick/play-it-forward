import { useState } from "react";
import { Link } from "react-router-dom";
import "../Donate/Donate.css";
// import pic from "./tennisdonate.png";

export default function Donate() {
    const [picture, setPicture] = useState("");
    return (
        <div className="donatepage">
            <h3 className="donatetopiftitle">Donate </h3>
            <p className="donationdescription">
                Play It Forward is a national, nonprofit organization inspired
                by the universal desire to become the best verison of yourself.
                Our members are our power, and your support allows us to work
                toward a nation where kids of any age are able to participate in
                any sport they want regardless of their socioeconomic status.
                Play It Forward wants to afford everyone who is able to Play the
                opportunity to Play. The registration contributions from the
                adult leagues help make the kids' leagues possible, but any
                additional efforts help the leagues thrive and provide an
                exceptional experience for the children.
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
