import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Order from './pages/Order';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
