import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import 'rsuite/dist/styles/rsuite-dark.css';

import Menu from './components/Menu'
// import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Themes from './components/Themes'
import Error from './components/Error'

function App() {
  return (
    <Menu>
      <Switch>
        <Route exact path="/" component={Themes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/themes" component={Themes} />
        <Route component={Error} />
      </Switch>
    </Menu>
  );
}

export default App;
