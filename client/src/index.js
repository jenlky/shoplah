import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import ProductsReducer from './reducers/ProductsReducer';
import PriceReducer from './reducers/PriceReducer';
import UserReducer from './reducers/UserReducer';
// import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  products: ProductsReducer,
  price: PriceReduces,
  user: UserReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
); 

const store = createStore(reducer); 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
//registerServiceWorker();
