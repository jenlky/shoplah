import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import FetchProducts from '../actions/FetchProducts';
import FetchUser from '../actions/FetchUser';
import CartPage from '../components/CartPage';
import MainPage from '../components/MainPage';
import ProductsReducer from '../reducers/ProductsReducer';
import UserReducer from '../reducers/UserReducer';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.fetchProducts();
    this.props.fetchUser();
    console.log(this.props);
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

/*
const mapStateToProps = state => ({
  products: ProductsReducer(state, FetchProducts).ProductsReducer.products,
  user: UserReducer(state, FetchUser)
}); */

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(FetchProducts()),
  fetchUser: () => dispatch(FetchUser())
});

export default connect(null, mapDispatchToProps)(App);