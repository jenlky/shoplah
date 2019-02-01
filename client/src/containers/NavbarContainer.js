import React from 'react';
import { connect } from 'react-redux';
import UserReducer from '../reducers/UserReducer';
import FetchUser from '../actions/FetchUser';
import Navbar from '../components/Products';

const NavbarContainer = ({ isLoggedIn }) => (
  <Navbar isLoggedIn={isLoggedIn} />
);

const mapStateToProps = state => ({
  isLoggedIn: UserReducer(state, FetchUser).isLoggedIn
});

export default connect(mapStateToProps, null)(NavbarContainer);