import React, { useState, useEffect } from "react";
// import "./Edit.css";
import axios from "axios";
import { connect } from "react-redux";
import { updateSportsInfo } from "../../ducks/get_reducer";
import { Link } from "react-router-dom";
// import firebase from "../../firebase";
import FileUploader from "react-firebase-file-uploader";

const Edit = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [coverPhoto, setCoverPhoto] = useState("");

    useEffect(() => {
        props.updateSportsInfo();
    });

    return (
        <div>
            <button
                onClick={() => this.showEdit()}
                className="editprofilebutton"
            >
                Edit Profile
            </button>

            {this.state.editMode === true ? (
                <div className="editprofilediv">
                    <h4 id="editprofiledivtitle">EDIT PROFILE</h4>
                    <div className="imagespreviewdiv">
                        <form>
                            <label>
                                <h5 className="uploadprofilepic">
                                    Upload Cover Photo
                                </h5>
                                <FileUploader
                                    accept="image/*"
                                    name="avatar"
                                    randomizeFilename
                                    storageRef={firebase
                                        .storage()
                                        .ref("images")}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    multiple={"multiple"}
                                    className="fileuploader"
                                />
                                <span>
                                    <img
                                        src={this.state.coverphotos}
                                        alt=""
                                        className="avatarpreview"
                                    />
                                </span>
                            </label>
                            <label>
                                <h5 className="uploadprofilepic">
                                    Upload Profile Picture
                                </h5>
                                <FileUploader
                                    accept="image/*"
                                    name="avatar"
                                    randomizeFilename
                                    storageRef={firebase
                                        .storage()
                                        .ref("images")}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadError={this.handleUploadError}
                                    onUploadSuccess={this.handleUploadAvatar}
                                    className="fileuploader"
                                />
                                <span>
                                    <img
                                        src={this.state.avatar}
                                        alt=""
                                        className="avatarpreview"
                                    />
                                </span>
                            </label>
                        </form>
                    </div>
                    <input
                        name={sportsInfo.player_name}
                        placeholder="Player Name"
                        onChange={(e) => this.updateName(e)}
                        required
                        className="editinput"
                    />
                    <input
                        name={sportsInfo.hometown}
                        placeholder="Hometown"
                        onChange={(e) => this.updateHometown(e)}
                        required
                        className="editinput"
                    />
                    <input
                        name={sportsInfo.sport_type}
                        placeholder="Sports"
                        onChange={(e) => this.updateSport(e)}
                        required
                        className="editinput"
                    />
                    <input
                        name={sportsInfo.age}
                        placeholder="Age"
                        onChange={(e) => this.updateAge(e)}
                        required
                        className="editinput"
                    />
                    <input
                        name={sportsInfo.position}
                        placeholder="Position"
                        onChange={(e) => this.updatePosition(e)}
                        required
                        className="editinput"
                    />
                    <button
                        onClick={() =>
                            this.updateInfo(sportsInfo.auth_id, {
                                player_name: this.state.player_name,
                                hometown: this.state.hometown,
                                sport_type: this.state.sport_type,
                                age: this.state.age,
                                position: this.state.position,
                            })
                        }
                        className="savechangesbutton"
                    >
                        SAVE CHANGES
                    </button>
                    <div>
                        <Link to="/">
                            <button
                                onClick={() =>
                                    this.deleteProfile(sportsInfo.auth_id)
                                }
                                className="deleteprofile"
                            >
                                DELETE PROFILE
                            </button>
                        </Link>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

const mapStateToProps = ({ state }) => ({
    ...state,
});

export default connect(mapStateToProps, { updateSportsInfo })(Edit);
