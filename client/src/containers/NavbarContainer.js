import React from 'react';
import { connect } from 'react-redux';
import { PURGE } from 'redux-persist';
import Navbar from '../components/Navbar';
//import { withRouter } from 'react-router';

const NavbarContainer = ({ username, isLoggedIn, purgeStore }) => (
  <Navbar
    username={username}
    isLoggedIn={isLoggedIn} 
    purgeStore={purgeStore}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn,
  username: state.userReducer.user,
});

const mapDispatchToProps = dispatch => ({
  purgeStore: () => dispatch({ type: PURGE, key: 'root', result: () => null })
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);