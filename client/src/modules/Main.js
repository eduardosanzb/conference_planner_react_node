import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { loadTheme } from '@microsoft/load-themed-styles';


import Home from './Home';
import Roster from './Roster';

loadTheme({
  // 'themePrimary': 'red'
});

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
)

export default Main;