import axios from "axios";
import { connect } from "react-redux";
// import {
//     updateAdultUsername,
//     updateAdultPassword,
//     updateKidUsername,
//     updateKidPassword,
// } from "../../ducks/registration_reducer";
// import "../Home/Login.css";

const Login = (props) => {
    const login = () => {
        axios.get("/login").then((response) => {
            return response.data;
        });
    };

    return (
        <a href={""} className="login-link">
            <button className="login">Play Now</button>
        </a>
    );
};

const mapStateToProps = (state) => ({ ...state.registration_reducer });

export default connect(mapStateToProps)(Login);
