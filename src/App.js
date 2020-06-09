import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Login from '../src/components/screen-login/Login';
import Hanking from './components/sreen-hanking/Hanking';

export default function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/hanking" component={Hanking} />
    </BrowserRouter>
  );
}
