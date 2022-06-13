import React, { Component } from 'react';
// import "./Edit.css";
import axios from 'axios';
import { connect } from 'react-redux';
import { updateSportsInfo } from '../../ducks/get_reducer';
import { Link } from 'react-router-dom';
// import firebase from "../../firebase";
import FileUploader from 'react-firebase-file-uploader';

class Edit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editMode: false,
			isUploading: false,
			avatar: '',
			coverphotos: ''
		};
		this.showEdit = this.showEdit.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updateAge = this.updateAge.bind(this);
		this.updatePosition = this.updatePosition.bind(this);
		this.updateHometown = this.updateHometown.bind(this);
		this.updateInfo = this.updateInfo.bind(this);
	}

	componentDidMount() {
		this.props.updateSportsInfo();
	}

	updateName(e) {
		this.setState({
			player_name: e.target.value
		});
	}
	updateAge(e) {
		this.setState({
			age: e.target.value
		});
	}
	updatePosition(e) {
		this.setState({
			position: e.target.value
		});
	}
	updateHometown(e) {
		this.setState({
			hometown: e.target.value
		});
	}
	updateSport(e) {
		this.setState({
			sport_type: e.target.value
		});
	}

	handleUploadStart = () => this.setState({ isUploading: true });
	handleUploadError = (error) => {
		this.setState({ isUploading: false });
		console.error(error);
	};
	handleUploadSuccess = (filename) => {
		this.setState({ isUploading: false });
		firebase
			.storage()
			.ref('images')
			.child(filename)
			.getDownloadURL()
			.then((url) => this.setState({ coverphotos: url }))
			.then(() => {
				// console.log(this.state.avatarURL, "coverphotos");
				axios.post(`/player/upload/${this.props.sportsInfo.auth_id}`, {
					url: this.state.coverphotos
				});
			});
	};

	handleUploadAvatar = (filename) => {
		this.setState({ isUploading: false });
		firebase
			.storage()
			.ref('images')
			.child(filename)
			.getDownloadURL()
			.then((url) => this.setState({ avatar: url }))
			.then(() => {
				// console.log(this.state.avatarURL, "avatarphoto");
				axios.post(
					`/player/uploadprofilepic/${this.props.sportsInfo.auth_id}`,
					{
						url: this.state.avatar
					}
				);
			});
	};

	updateInfo(id, body) {
		axios
			.put(`/playerInfo/${id}`, { body })
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err, 'post err (PLAYER 48)'));
		window.location.reload(false);
		this.showEdit();
	}

	deleteProfile(id) {
		axios
			.delete(`/playerInfo/${id}`)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => console.log(err, 'delete error'));
	}

	showEdit() {
		this.setState({ editMode: !this.state.editMode });
	}

	render() {
		const { sportsInfo } = this.props;
		console.log(this.state);
		return (
			<div>
				<button onClick={() => this.showEdit()} className='editprofilebutton'>
					Edit Profile
				</button>

				{this.state.editMode === true ? (
					<div className='editprofilediv'>
						<h4 id='editprofiledivtitle'>EDIT PROFILE</h4>
						<div className='imagespreviewdiv'>
							<form>
								<label>
									<h5 className='uploadprofilepic'>Upload Cover Photo</h5>
									<FileUploader
										accept='image/*'
										name='avatar'
										randomizeFilename
										storageRef={firebase.storage().ref('images')}
										onUploadStart={this.handleUploadStart}
										onUploadError={this.handleUploadError}
										onUploadSuccess={this.handleUploadSuccess}
										multiple={'multiple'}
										className='fileuploader'
									/>
									<span>
										<img
											src={this.state.coverphotos}
											alt=''
											className='avatarpreview'
										/>
									</span>
								</label>
								<label>
									<h5 className='uploadprofilepic'>Upload Profile Picture</h5>
									<FileUploader
										accept='image/*'
										name='avatar'
										randomizeFilename
										storageRef={firebase.storage().ref('images')}
										onUploadStart={this.handleUploadStart}
										onUploadError={this.handleUploadError}
										onUploadSuccess={this.handleUploadAvatar}
										className='fileuploader'
									/>
									<span>
										<img
											src={this.state.avatar}
											alt=''
											className='avatarpreview'
										/>
									</span>
								</label>
							</form>
						</div>
						<input
							name={sportsInfo.player_name}
							placeholder='Player Name'
							onChange={(e) => this.updateName(e)}
							required
							className='editinput'
						/>
						<input
							name={sportsInfo.hometown}
							placeholder='Hometown'
							onChange={(e) => this.updateHometown(e)}
							required
							className='editinput'
						/>
						<input
							name={sportsInfo.sport_type}
							placeholder='Sports'
							onChange={(e) => this.updateSport(e)}
							required
							className='editinput'
						/>
						<input
							name={sportsInfo.age}
							placeholder='Age'
							onChange={(e) => this.updateAge(e)}
							required
							className='editinput'
						/>
						<input
							name={sportsInfo.position}
							placeholder='Position'
							onChange={(e) => this.updatePosition(e)}
							required
							className='editinput'
						/>
						<button
							onClick={() =>
								this.updateInfo(sportsInfo.auth_id, {
									player_name: this.state.player_name,
									hometown: this.state.hometown,
									sport_type: this.state.sport_type,
									age: this.state.age,
									position: this.state.position
								})
							}
							className='savechangesbutton'>
							SAVE CHANGES
						</button>
						<div>
							<Link to='/'>
								<button
									onClick={() => this.deleteProfile(sportsInfo.auth_id)}
									className='deleteprofile'>
									DELETE PROFILE
								</button>
							</Link>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ ...state.getReducer });

export default connect(mapStateToProps, {
	updateSportsInfo
})(Edit);
