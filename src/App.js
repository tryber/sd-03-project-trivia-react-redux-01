import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/login';
import Game from './components/gameScreen';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/gameScreen" component={Game} />
        {/*        <Route path="/ranking" component={Ranking} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/config" component={Config} /> */}
      </Switch>
    </BrowserRouter>
  );
}
