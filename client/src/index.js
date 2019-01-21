import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
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
  ProductsReducer,
  PriceReducer,
  UserReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
); 

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App store={store} />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
//registerServiceWorker();
