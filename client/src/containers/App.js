import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FetchProducts from '../actions/FetchProducts';
import FetchUser from '../actions/FetchUser';
import Checkout from '../components/Checkout';
import MainPage from '../components/MainPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProducts();
    this.props.fetchUser();
  }
  
  render() {
    return (
      <Switch> 
        <Route exact path='/cart' render={() => <Checkout />} />
        <Route exact path='/' render={() => <MainPage />} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(FetchProducts()),
  fetchUser: () => dispatch(FetchUser())
});

export default connect(null, mapDispatchToProps)(App);