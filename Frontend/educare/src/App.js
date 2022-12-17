import './App.css';
import React from 'react';
import MenuPage from './pages/MenuPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReportsPage from './pages/ReportsPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Router>
        <MenuPage />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/ReportsPage' exact component={ReportsPage} />
          <Route path='/LandingPage' exact component={LandingPage} />
        </Switch>
      </Router>
  );
}

export default App;