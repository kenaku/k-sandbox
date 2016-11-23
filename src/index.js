import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import BullDemo from './Components/Views/BullDemo/Index';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/bull" component={BullDemo}/>
    <Route path="/bull-gsap" component={BullDemo}/>
    <Route path="/bull-rm" component={BullDemo}/>
  </Router>
), document.getElementById('root'))