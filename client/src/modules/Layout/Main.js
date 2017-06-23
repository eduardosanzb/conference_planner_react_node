import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { loadTheme } from '@microsoft/load-themed-styles';
import Layout from 'antd/lib/layout';
// Components
import Home from './HomePage';
import Profile from '../Profile/ProfilePage';
import Users from '../Users/UsersPage';
import Events from '../Events/EventsPage';
import Buildings from '../Buildings/BuildingsPage';

const Main = () => (
  <Layout style={{ background: '#ECECEC', width: '100%', height: '80vh', overflow: 'auto', fontFamily: 'BlinkMacSystemFont, "Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif' }}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/users' component={Users}/>
      <Route path='/events' component={Events}/>
      <Route path='/buildings' component={Buildings}/>
    </Switch>
  </Layout> 
);

// loadTheme({
//   'themePrimary': 'red'
// });

export default Main;