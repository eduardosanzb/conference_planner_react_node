import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { loadUserFromToken } from './actions';

// Components
import Header from './modules/Layout/headers/Header';
import Main from './modules/Layout/Main';
// import Footer from './modules/Layout/Footer';

require('../node_modules/office-ui-fabric-react/dist/css/fabric.min.css');
require('./antd.min.css');
require('./App.scss');
require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

class App extends React.PureComponent {
  componentWillMount () {
    this.props.loadUserFromToken();
  }
  render () {
    return (
      <BrowserRouter>
        <div
          style={{
            fontFamily:
              'BlinkMacSystemFont, "Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif'
          }} >
          <Route path="/" component={Header} />
          <Main />
          {/*<Route path="/" component={Footer} />*/}
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, { loadUserFromToken })(App);
