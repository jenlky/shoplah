import React from 'react';
import { connect } from 'react-redux';
import Profile from '../components/Profile';

const ProfileContainer = ({ user }) => (
  <Profile user={user} />
);

const mapStateToProps = state => ({
  user: { 
    username: state.userReducer.user,
    userID: state.userReducer.userID,
    picture: state.userReducer.picture
  }
});

export default connect(mapStateToProps, null)(ProfileContainer);