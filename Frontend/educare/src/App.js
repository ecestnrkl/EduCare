import './App.css';
import React from 'react';
import MenuPage from './pages/MenuPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReportsPage from './pages/ReportsPage';
import LandingPage from './pages/LandingPage';
import Settings from './pages/Settings';
import SickNote from './components/ReportsPage/SickNote';

function App() {
  return (
    <Router>
        <MenuPage />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/HomePage' exact component={HomePage} />
          <Route path='/ReportsPage' exact component={ReportsPage} />
          <Route path='/LandingPage' exact component={LandingPage} />
          <Route path='/Settings' exact component={Settings} />
          <Route path='/SickNote' exact component={SickNote} />
        </Switch>
      </Router>
  );
}

export default App;