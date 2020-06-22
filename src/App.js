import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Game from './components/GameScreen';
import Config from './components/Config';


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/GameScreen" component={Game} />
        <Route path="/Config" component={Config} />
        {/*        <Route path="/ranking" component={Ranking} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/config" compoenent={config} /> component={Config} /> */}
      </Switch>
    </BrowserRouter>
  );
}
