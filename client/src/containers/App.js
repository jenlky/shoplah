import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import FetchFromDatabase from '../actions/FetchFromDatabase';
import FetchProducts from '../actions/FetchProducts';
import FetchUser from '../actions/FetchUser';
import Checkout from '../components/Checkout';
import MainPage from '../components/MainPage';
import Profile from '../components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor isLoggedIn', this.props.isLoggedIn);
  }

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchUser();
  }

  componentDidUpdate() {
    console.log('componentDidUpdate isLoggedIn', this.props.isLoggedIn);

    if (this.props.isLoggedIn) {
      this.props.fetchFromDatabase();
    }
  }

  redirect = () => {
    // in development - http://localhost:8080/auth/login'
    window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/auth/login';
    // maybe can add spinner while loading
    return null;
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Switch> 
          <Route exact path='/cart' render={() => this.props.isLoggedIn ? 
            <Checkout /> : this.redirect()
          } />
          <Route exact path='/user/profile' render={() => <Profile />} />
          <Route exact path='/' component={<MainPage />} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchFromDatabase: () => dispatch(FetchFromDatabase()),
  fetchProducts: () => dispatch(FetchProducts()),
  fetchUser: () => dispatch(FetchUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);