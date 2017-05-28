import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Header from './modules/Header';
import Main from './modules/Main';

require('../node_modules/office-ui-fabric-react/dist/css/fabric.min.css');
require('./antd.min.css');
require('./index.css');

const App = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Main />
    </div>
  </BrowserRouter>
);

export default App;