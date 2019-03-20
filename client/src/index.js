import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './configureStore';
import './index.css';
import App from './containers/App';
// import registerServiceWorker from './registerServiceWorker';

// Can't use store.getState().userReducer.isLoggedIn because store is empty in the beginning
console.log('store', store.getState());

/*
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')); */

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {store.getState().userReducer.isLoggedIn ? 
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate> : 
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      }
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
//registerServiceWorker();