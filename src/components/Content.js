import React from 'react';
import { Switch, Route } from 'react-router';

import About from './About';
import CV from './CV';
import NotFound from './NotFound';
import Main from './Main';
import Portfolio from './Portfolio';

import '../styles/Content.css';

const Content = () => (
  <main className="content">
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/cv' component={CV}/>
      <Route exact path='/portfolio' component={Portfolio}/>
      <Route path='*' component={NotFound}/>
    </Switch>
  </main>
)

export default Content;
