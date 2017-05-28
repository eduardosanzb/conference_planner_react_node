import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Roster from './Roster';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
)

export default Main;