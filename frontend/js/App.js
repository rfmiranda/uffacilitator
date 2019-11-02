import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SentryBoundary from './utils/SentryBoundary';

const App = () => (
  <SentryBoundary>
    <Router>
      <Route path="/home/" component={Home} />
      <Route exact path="/" component={Login} />
    </Router>
  </SentryBoundary>
);

export default hot(module)(App);
