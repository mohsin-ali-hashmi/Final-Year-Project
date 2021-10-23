import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { reducers } from './reducers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Router>
          <Provider store={store}>
          <ToastContainer
            position="top-right"
            limit={10}
            autoClose={6000}
            newestOnTop={true}
            closeOnClick
            rtl={false}
        />

          <App />
          
          </Provider>
  </Router>,
  document.getElementById('root')
);


