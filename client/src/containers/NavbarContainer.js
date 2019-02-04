import React from 'react';
import { connect } from 'react-redux';
import userReducer from '../reducers/userReducer';
import FetchUser from '../actions/FetchUser';
import Navbar from '../components/Navbar';

const NavbarContainer = ({ isLoggedIn }) => (
  <Navbar isLoggedIn={isLoggedIn} />
);

const mapStateToProps = state => ({
  isLoggedIn: userReducer(state, FetchUser).userReducer.isLoggedIn
});

export default connect(mapStateToProps, null)(NavbarContainer);