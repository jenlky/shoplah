import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FetchProducts from '../actions/FetchProducts';
import FetchUser from '../actions/FetchUser';
import CartPage from '../components/CartPage';
import MainPage from '../components/MainPage';
import UserReducer from '../reducers/UserReducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProducts();
    // Unhandled Rejection (Error)
    // this.props.fetchUser();
  }
  
  render() {
    return (
      <Switch> 
        <Route exact path='/cart' render={() => <CartPage />} />
        <Route exact path='/' render={() => <MainPage />} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  user: UserReducer(state, FetchUser)
});

// Attempted import error: 'FetchProducts' is not exported from '../actions/FetchProducts'.
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(FetchProducts()),
  fetchUser: () => dispatch(FetchUser())
});

export default connect(null, mapDispatchToProps)(App);