import { useEffect } from "react";
import "./Home.css";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/get_reducer";
import Login from "./Login";
// import './bootstrap.css';

const Home = () => {
    useEffect(() => {
        // props.updateUser();
    }, []);

    return (
        <div className="website">
            <h1 className="website-title">PLAY IT FORWARD</h1>
            {/* <Login /> */}
        </div>
    );
};

const mapStateToProps = (state) => ({ ...state.getReducer });

export default connect(mapStateToProps, { updateUser })(Home);
