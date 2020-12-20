import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Commands from './pages/Commands';
import Team from './pages/Team';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/commands' component={Commands} />
          <Route path='/developer' component={Team} />
          <Route path='/bot' component={() => window.location.replace('https://discord.com/oauth2/authorize?client_id=775542914117795860&permissions=8&scope=bot')} />
          <Route component={() => <h1>404</h1>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
