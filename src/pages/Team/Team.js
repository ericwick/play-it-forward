import { useState, useEffect } from 'react';
// import Chat from '../Teams/Chat';
import { connect } from 'react-redux';
// import { updateSportsInfo, updateTeam } from "../../ducks/get_reducer";
import './team.css';

const Team = () => {
	const [togglePractice, setTogglePractice] = useState(false);
	const [teamEmails, setTeamEmails] = useState('');
	const [emails, setEmails] = useState('');

	useEffect(() => {
		// props.updateSportsInfo();
	}, []);

	const schedulePractice = () => {
		// axios
		//   .post("/team/practice", { teamEmails })
		//   .then(response => {
		//     console.log(response);
		//   })
		//   .catch(err => console.log(err));
		// showPractice();
	};

	const showPractice = () => {
		// let arr = props.team.map((e, i) => {
		//     return e.email;
		// });
		// setTeamEmails(arr);
		// setTogglePractice(!this.state.togglePractice);
	};

	const getEmails = e => {
		setEmails(e.target.value);
	};

	const scrollToDomRef = () => {
		const myDomNode = ReactDOM.findDOMNode(this.myRef);
		window.scrollTo(0, myDomNode.offsetTop);
	};

	return (
		<div id="teampagediv">
			{/* <Carousel>
				<div>
					<img
                  alt=""
                  src="https://images.fineartamerica.com/images-medium-large-5/closeup-of-american-football-on-field-danny-hooks.jpg"
                />
				</div>
			</Carousel> */}
			<button onClick={() => this.scrollToDomRef()}>Practice!</button>
			{/* <div className="squaddiv">{squad}</div> */}
			<div className="chaticon">
				{/* <Chat teamName={sportsInfo.team_name} /> */}
			</div>
			<hr className="linebreak" />
			{this.state.togglePractice ? (
				<div className="schedulepracticediv">
					<input placeholder="Date and Time" />
					<textarea
						rows="3"
						columns="2"
						className="emailsofroster"
					/>
					<textarea
						row="10"
						columns="4"
						defaultValue=""
						className="messagetoteam"
					/>
					<button className="sendpracticeschedule">Schedule Practice</button>
				</div>
			) : (
				<div
					onClick={() => this.showPractice()}
					className="schedulepracticediv">
					<h4 className="schedulepracticetitle">Schedule Practice</h4>
				</div>
			)}
		</div>
	);
};

const mapStateToProps = state => ({ ...state.getReducer });

export default connect(mapStateToProps)(Team);
