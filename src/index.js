import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import BullReactMotion from './Components/Views/BullDemo/BullReactMotion';
import BullGSAP from './Components/Views/BullDemo/BullGSAP';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/bull-rm" component={BullReactMotion}/>
    <Route path="/bull-gsap" component={BullGSAP}/>
  </Router>
), document.getElementById('root'))