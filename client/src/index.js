import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './containers/App';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import asyncDispatchMiddleware from './asyncDispatchMiddleware';
// import registerServiceWorker from './registerServiceWorker';

const middlewares = [thunk, asyncDispatchMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

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