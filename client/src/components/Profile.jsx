import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';

const Profile = ({ user }) => {
  console.log(user);

  return (
    <main>
      <NavbarContainer />
      <h2 className='profile'>My Profile</h2>
      <h3>Manage and protect your account</h3>
      <div>
        <span>Username:</span>
        <span>{user.username}</span>
      </div>
      <div>
        <span>User ID:</span>
        <span>{user.userID}</span>
      </div>
      <div>
        <span>Picture:</span>
        <img className='profile-picture' src={user.picture} alt='User thumbnail' />
      </div>    
    </main>
  );
}

export default Profile;