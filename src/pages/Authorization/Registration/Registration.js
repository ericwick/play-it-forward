import { useEffect } from 'react';
import './registration.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import {
//     updatePlayerName,
//     updateTeamName,
//     updateSports,
//     updatePosition,
//     updateGender,
//     updateAge,
//     updateHometown,
//     updateTeams,
//     updateEmail,
// } from "../../ducks/reducer/registration_reducer";

const Registration = props => {
	useEffect(() => {
		// props.updateTeams();
	}, []);

	// const {
	//     updatePlayerName,
	//     updateSports,
	//     updatePosition,
	//     updateGender,
	//     updateAge,
	//     updateHometown,
	//     updateEmail,
	//     updateTeamName,
	// } = props;

	const submit = () => {
		let {
			player_name,
			team_name,
			sports,
			position,
			gender,
			age,
			hometown,
			email
		} = props;
		// axios/http post call here
	};

	// let teamOptions = props.teams.map((e, i, arr) => {
	//     if (e.sport === null) {
	//         e.sport = "football";
	//     }
	//     if (props.age >= 18 && e.age_range === "18+") {
	//         return (
	//             <div key={i} className="teamoptions">
	//                 <h6>Team Name:</h6>
	//                 <br />
	//                 <p className="teamnameregister">{e.team_name}</p>
	//                 <h6>Sport:</h6>
	//                 <p className="teamsportregister">{e.sport_type}</p>
	//                 <br />
	//                 <h6>Age Range:</h6>
	//                 <p className="teamsportregister">{e.age_range}</p>
	//                 <br />
	//                 <h6>Gender Type:</h6>
	//                 <p className="teamsportregister">{e.gender_type}</p>
	//             </div>
	//         );
	//     } else if (
	//         props.age < 18 &&
	//         props.age >= 14 &&
	//         e.age_range === "14-17"
	//     ) {
	//         return (
	//             <div key={i} className="teamoptions">
	//                 <h6>Team Name:</h6>
	//                 <br />
	//                 <p className="teamnameregister">{e.team_name}</p>
	//                 <h6>Sport:</h6>
	//                 <p className="teamsportregister">{e.sport_type}</p>
	//                 <br />
	//                 <h6>Age Range:</h6>
	//                 <p className="teamsportregister">{e.age_range}</p>
	//                 <br />
	//                 <h6>Gender Type:</h6>
	//                 <p className="teamsportregister">{e.gender_type}</p>
	//             </div>
	//         );
	//     } else if (
	//         props.age < 14 &&
	//         props.age >= 11 &&
	//         e.age_range === "13-14"
	//     ) {
	//         return (
	//             <div key={i} className="teamoptions">
	//                 <h6>Team Name:</h6>
	//                 <br />
	//                 <p className="teamnameregister">{e.team_name}</p>
	//                 <h6>Sport:</h6>
	//                 <p className="teamsportregister">{e.sport_type}</p>
	//                 <br />
	//                 <h6>Age Range:</h6>
	//                 <p className="teamsportregister">{e.age_range}</p>
	//                 <br />
	//                 <h6>Gender Type:</h6>
	//                 <p className="teamsportregister">{e.gender_type}</p>
	//             </div>
	//         );
	//     } else if (props.age < 11 && props.age >= 9 && e.age_range === "9-10") {
	//         return (
	//             <div key={i} className="teamoptions">
	//                 <h6>Team Name:</h6>
	//                 <br />
	//                 <p className="teamnameregister">{e.team_name}</p>
	//                 <h6>Sport:</h6>
	//                 <p className="teamsportregister">{e.sport_type}</p>
	//                 <br />
	//                 <h6>Age Range:</h6>
	//                 <p className="teamsportregister">{e.age_range}</p>
	//                 <br />
	//                 <h6>Gender Type:</h6>
	//                 <p className="teamsportregister">{e.gender_type}</p>
	//             </div>
	//         );
	//     } else if (props.age < 9 && props.age >= 7 && e.age_range === "7-8") {
	//         return (
	//             <div key={i} className="teamoptions">
	//                 <h6>Team Name:</h6>
	//                 <br />
	//                 <p className="teamnameregister">{e.team_name}</p>
	//                 <h6>Sport:</h6>
	//                 <p className="teamsportregister">{e.sport_type}</p>
	//                 <br />
	//                 <h6>Age Range:</h6>
	//                 <p className="teamsportregister">{e.age_range}</p>
	//                 <br />
	//                 <h6>Gender Type:</h6>
	//                 <p className="teamsportregister">{e.gender_type}</p>
	//             </div>
	//         );
	//     } else if (props.age < 7 && props.age >= 5 && e.age_range === "5-6") {
	//         return (
	//             <div key={i} className="teamoptions">
	//                 <h6>Team Name:</h6>
	//                 <br />
	//                 <p className="teamnameregister">{e.team_name}</p>
	//                 <h6>Sport:</h6>
	//                 <p className="teamsportregister">{e.sport_type}</p>
	//                 <br />
	//                 <h6>Age Range:</h6>
	//                 <p className="teamsportregister">{e.age_range}</p>
	//                 <br />
	//                 <h6>Gender Type:</h6>
	//                 <p className="teamsportregister">{e.gender_type}</p>
	//             </div>
	//         );
	//     }
	// });

	return (
		<div className="registrationpage">
			{/* <Social /> */}
			{/* <img
          alt=""
          src="https://buffaloriverworks.com/wp-content/uploads/2013/08/KickballPortfolioHeader.png"
        /> */}
			<div>
				<h2 id="registrationtitle">REGISTRATION</h2>
				<p className="registrationinstruction">
					Before filling out this form to complete registration, head over to
					the login and enter your username/email and password to create an
					account. <br />
					Then complete this form to finish setting up your profile.
				</p>
				<p className="formitem">
					FULL NAME
					<br />
					<input className="registrationsignuplink" />
				</p>
				<br />
				<p className="formitem">
					EMAIL
					<br />
					<input className="registrationsignuplink" />
				</p>
				<br />
				<p className="formitem">
					HOMETOWN
					<br />
					<input className="registrationsignuplink" />
				</p>
				<br />
				<p className="formitem">
					POSITION
					<br />
					<input className="registrationsignuplink" />
				</p>
				<br />
				<p className="formitem">
					GENDER
					<br />
					<input className="registrationsignuplink" />
				</p>
				<br />
				<p className="formitem">
					AGE
					<br />
					<input className="registrationsignuplink" />
				</p>
				<br />
				<div className="availableteamoptions">{teamOptions}</div>
				<p className="formitem">
					TEAM NAME
					<br />
					<input
						placeholder="Select team from list above"
						className="registrationsignuplink"
					/>
				</p>
				<p className="formitem">
					SPORT
					<br />
					<input
						placeholder="Input Sport with Chosen Team name"
						className="registrationsignuplink"
					/>
				</p>
				<br />
				<br />
				<Link to="/player">
					<button className="registrationlink">Submit</button>
				</Link>
			</div>
		</div>
	);
};

const mapStateToProps = state => ({ ...state.registration_reducer });

export default connect(mapStateToProps, {
	// updatePlayerName,
	// updateTeamName,
	// updateSports,
	// updatePosition,
	// updateGender,
	// updateAge,
	// updateHometown,
	// updateTeams,
	// updateEmail,
})(Registration);
