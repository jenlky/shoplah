import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

const NavbarContainer = ({ isLoggedIn }) => (
  <Navbar isLoggedIn={isLoggedIn} />
);

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(mapStateToProps, null)(NavbarContainer);