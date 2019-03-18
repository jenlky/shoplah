import React from 'react';
import { connect } from 'react-redux';
import { PURGE } from 'redux-persist';
import Navbar from '../components/Navbar';

const NavbarContainer = ({ user, isLoggedIn, purgeStore }) => (
  <Navbar
    user={user}
    isLoggedIn={isLoggedIn} 
    purgeStore={purgeStore}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  user: { 
    username: state.userReducer.user,
    userID: state.userReducer.userID,
    thumbnail: state.userReducer.thumbnail
  }
});

const mapDispatchToProps = dispatch => ({
  purgeStore: () => dispatch({ type: PURGE, key: 'root', result: () => null })
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);