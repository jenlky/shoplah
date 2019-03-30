import React from 'react';
import { connect } from 'react-redux';
import MainPage from '../components/MainPage';

const MainPageContainer = ({ showPopup }) => (
  <MainPage showPopup={showPopup} />
);

const mapStateToProps = state => ({
  showPopup: state.productsReducer.showPopup,
});

export default connect(mapStateToProps, null)(MainPageContainer);