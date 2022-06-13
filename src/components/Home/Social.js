import { Link } from "react-router-dom";
// import "./Home.css";

export default function Social() {
    return (
        <ul className="socialmediaicons">
            <li className="contacticons" id="facebook">
                <img
                    alt=""
                    src="https://facebookbrand.com/wp-content/themes/fb-branding/prj-fb-branding/assets/images/fb-art.png"
                    className="contacticonimage"
                />
            </li>
            <li className="contacticons" id="instagram">
                <img
                    alt=""
                    src="https://cdn0.iconfinder.com/data/icons/social-media-circle-long-shadow/1024/instagram-512.png"
                    className="contacticonimage"
                />
            </li>
            <li className="contacticons" id="twitter">
                <img
                    alt=""
                    src="https://banner2.kisspng.com/20180319/ylq/kisspng-college-of-charleston-logo-computer-icons-free-high-quality-twitter-icon-5ab03c2dc12fe4.4151243215214991817913.jpg"
                    className="contacticonimage"
                />
            </li>
            <Link to="/about">
                <li className="contacticons" id="contactpif">
                    <img
                        alt=""
                        src="https://ubisafe.org/images/transparent-logos-phone-2.png"
                        className="contacticonimage"
                    />
                </li>
            </Link>
        </ul>
    );
}
