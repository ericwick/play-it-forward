import { useState, useEffect } from "react";
import "./Edit.css";
import { connect } from "react-redux";
// import { updateSportsInfo } from "../../ducks/get_reducer";
import { Link } from "react-router-dom";
// import firebase from "../../firebase";
import FileUploader from "react-firebase-file-uploader";

const Edit = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [avatar, setAvatar] = useState("");
    const [coverPhoto, setCoverPhoto] = useState("");

    useEffect(() => {
        // props.updateSportsInfo();
    }, []);

    return (
        <div>
            <button className="editprofilebutton">Edit Profile</button>

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
                    <input placeholder="Player Name" className="editinput" />
                    <input placeholder="Hometown" className="editinput" />
                    <input placeholder="Sports" className="editinput" />
                    <input placeholder="Age" className="editinput" />
                    <input placeholder="Position" className="editinput" />
                    <button className="savechangesbutton">SAVE CHANGES</button>
                    <div>
                        <Link to="/">
                            <button className="deleteprofile">
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

export default connect(mapStateToProps)(Edit);
