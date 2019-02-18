import React from 'react';
import { connect } from 'react-redux';
import FetchUser from '../actions/FetchUser';
import Navbar from '../components/Navbar';
import userReducer from '../reducers/userReducer';

const NavbarContainer = ({ isLoggedIn }) => (
  <Navbar isLoggedIn={isLoggedIn} />
);

const mapStateToProps = state => ({
  isLoggedIn: userReducer(state, FetchUser).userReducer.isLoggedIn
});

export default connect(mapStateToProps, null)(NavbarContainer);