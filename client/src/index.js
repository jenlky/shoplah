import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

// import registerServiceWorker from './registerServiceWorker';

/*
const initialState = {
  products: [],
  num: [],
  item: [],
  qty: [],
  totalPrice: 0
};

function reducer(state = initialState, action) {
  return state;
}

const store = createStore(reducer); 
*/

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));
//registerServiceWorker();
