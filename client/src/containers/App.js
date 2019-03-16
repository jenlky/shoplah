import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FetchFromDatabase from '../actions/FetchFromDatabase';
import FetchProducts from '../actions/FetchProducts';
import FetchUser from '../actions/FetchUser';
import Checkout from '../components/Checkout';
import MainPage from '../components/MainPage';
import Profile from '../components/Profile';
import Spinner from '../components/Spinner';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor isLoggedIn', this.props.isLoggedIn);
  }

  componentDidMount() {
    //this.props.hideSpinner();
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
    if (process.env.NODE_ENV === 'development') {
      window.location.href = 'http://localhost:8080/auth/login';
    } else {
      window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/auth/login';
    }

    return null;
  }

  render() {
    return (
      <React.Fragment>
        <Switch> 
          <Route exact path='/cart' render={() => this.props.isLoggedIn ? 
            <Checkout /> : this.redirect()
          } />
          <Route exact path='/user/profile' render={() => <Profile />} />
          <Route exact path='/' component={MainPage} />
        </Switch>
        <Spinner />
      </React.Fragment>   
    );
  }
}

/*
const spinner = document.getElementsByClassName('.spinner');
console.log(spinner);

// if you want to show the loader when React loads data again
const showSpinner = () => spinner.classList.remove('spinner-hide');
const hideSpinner = () => spinner.classList.add('spinner-hide'); */

const mapStateToProps = state => ({
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchFromDatabase: () => dispatch(FetchFromDatabase()),
  fetchProducts: () => dispatch(FetchProducts()),
  fetchUser: () => dispatch(FetchUser()),
  //hideSpinner: () => hideSpinner()
});

export default connect(mapStateToProps, mapDispatchToProps)(App);