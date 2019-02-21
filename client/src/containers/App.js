import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FetchProducts from '../actions/FetchProducts';
import FetchUser from '../actions/FetchUser';
import Checkout from '../components/Checkout';
import MainPage from '../components/MainPage';
import Profile from '../components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProducts();
    this.props.fetchUser();
    console.log('isLoggedIn', this.props.isLoggedIn);
  }

  render() {
    return (
      <Switch> 
        {/* isLoggedIn ? <Checkout /> : <Profile />, why does it load Profile for a while first then Checkout */}
        <Route exact path='/cart' render={() => <Checkout isLoggedIn={this.props.isLoggedIn} />} />
        <Route exact path='/user/profile' render={() => <Profile />} />
        <Route exact path='/' render={() => <MainPage />} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(FetchProducts()),
  fetchUser: () => dispatch(FetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);