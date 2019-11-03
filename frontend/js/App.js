import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import Home from './pages/Home';
import Login from './pages/Login';
import SentryBoundary from './utils/SentryBoundary';

const App = () => (
  <SentryBoundary>
    <Provider store={store}>
      <Router>
        <Route path="/home/" component={Home} />
        <Route exact path="/" component={Login} />
      </Router>
    </Provider>
  </SentryBoundary>
);

export default hot(module)(App);
