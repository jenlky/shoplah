import React from "react";
import NavbarContainer from "../containers/NavbarContainer";

const Profile = ({ user }) => {
  return (
    <React.Fragment>
      <NavbarContainer />
      <main className="profile">
        <h2>My Profile</h2>
        <p>Manage and protect your account</p>
        <hr />
        <div className="profile-info">
          <div>
            <span>Username: </span>
            <span>{user.username}</span>
          </div>
          <div>
            <span>User ID: </span>
            <span>{user.userID}</span>
          </div>
          <div className="profile-picture-container">
            <span>Picture: </span>
            <img
              className="profile-picture"
              src={user.picture}
              alt="User thumbnail"
            />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Profile;
