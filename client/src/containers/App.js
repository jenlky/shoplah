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
  }
  
  redirect = () => {
    window.location.href = 'http://localhost:8080/auth/login';
    // maybe can add spinner while loading
    return null;
  }

  render() {
    return (
      <Switch> 
        <Route exact path='/cart' render={() => 
          this.props.isLoggedIn ? 
          <Checkout /> : 
          this.redirect()
        } />
        <Route exact path='/user/account/profile' render={() => <Profile />} />
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