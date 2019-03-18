import React from 'react';
import NavbarContainer from '../containers/NavbarContainer';

const Profile = ({ user }) => {
  console.log(user)

  return (
    <main>
      <NavbarContainer />
      <h2 className='profile'>My Profile</h2>
      <h3>Manage and protect your account</h3>
      {/*<p>{user.username}</p>
      <p>{user.userID}</p>
      <p>{user.thumbnail}</p>*/}
    </main>
  );
}

export default Profile;