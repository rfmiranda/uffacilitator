// import pages
import 'bootstrap-includes';
import '../sass/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { History as history } from './utils'
import { auth } from './store/actions/auth'
import store from './store'

import App from './App';
import Axios from 'axios';

const token = localStorage.getItem("token");

if (token) {
  Axios.post("/users/api/verify", { token }).then( response => {
    store.dispatch(auth(true, response.data));
    history.push(window.location.pathname === '/' ? '/home/' :  window.location.pathname )
  }).catch( error => {
    history.push("/")
  })
  
} else {
  history.push("/")
}

Sentry.init({
  dsn: window.SENTRY_DSN,
  release: window.COMMIT_SHA,
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('react-app'));
