import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './containers/App';
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import ProductsReducer from './reducers/ProductsReducer';
import UserReducer from './reducers/UserReducer';
// import registerServiceWorker from './registerServiceWorker';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const rootReducer = combineReducers({
  ProductsReducer,
  UserReducer
});

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
//registerServiceWorker();

export default store;