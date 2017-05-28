import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Header from './modules/Layout/Header';
import Main from './modules/Layout/Main';
import Footer from './modules/Layout/Footer';

require('../node_modules/office-ui-fabric-react/dist/css/fabric.min.css');
require('./antd.min.css');
require('./App.scss');

const App = () => (
  <BrowserRouter>
    <div style={{fontFamily: '"Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif' }}>
      <Route path="/" component={Header} />
      <Main />
      <Route path="/" component={Footer} />
    </div>
  </BrowserRouter>
);

export default App;