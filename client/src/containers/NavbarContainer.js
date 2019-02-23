import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { PURGE } from 'redux-persist';

const NavbarContainer = ({ isLoggedIn, purgeStore }) => (
  <Navbar 
    isLoggedIn={isLoggedIn} 
    purgeStore={purgeStore}
  />
);

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  purgeStore: () => dispatch({ type: PURGE, key: 'root', result: () => null })
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);