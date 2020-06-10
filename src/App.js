import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Login from '../src/components/screen-login/Login.jsx';
import Hanking from './components/sreen-hanking/Hanking';
import Game from './components/screen-game/Game';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/hanking" component={Hanking} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/games/questions/:id/" component={Game} />
      </Switch>
    </BrowserRouter>
  );
}
