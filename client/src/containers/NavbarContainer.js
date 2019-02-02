import React from 'react';
import { connect } from 'react-redux';
import UserReducer from '../reducers/UserReducer';
import FetchUser from '../actions/FetchUser';
import Navbar from '../components/Navbar';

const NavbarContainer = ({ isLoggedIn }) => (
  <Navbar isLoggedIn={isLoggedIn} />
);

const mapStateToProps = state => ({
  isLoggedIn: UserReducer(state, FetchUser).UserReducer.isLoggedIn
});

export default connect(mapStateToProps, null)(NavbarContainer);