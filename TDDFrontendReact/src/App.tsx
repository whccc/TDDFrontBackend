import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

require('dotenv').config();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Login">
          <LoginPage />
        </Route>
        <Route exact path="/Register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
