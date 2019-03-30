import React from 'react';
import { connect } from 'react-redux';
import TogglePopup from '../actions/TogglePopup';
import Popup from '../components/Popup';

const PopupContainer = ({ togglePopup }) => (
  <Popup togglePopup={togglePopup} />
);

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(TogglePopup()),
});

export default connect(null, mapDispatchToProps)(PopupContainer);