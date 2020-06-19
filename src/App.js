import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Game from './components/GameScreen';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/GameScreen" component={Game} />
        {/*        <Route path="/ranking" component={Ranking} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/config" component={Config} /> */}
      </Switch>
    </BrowserRouter>
  );
}
