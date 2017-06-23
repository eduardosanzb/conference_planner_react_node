import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import Layout from 'antd/lib/layout';
// import Icon from 'antd/lib/icon';
import Button from 'antd/lib/button';
import Popover from 'antd/lib/popover';
const { Header } = Layout;

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isCalloutVisible: false,
      email: '',
      password: ''
    };

    this._onShowMenuClicked = this._onShowMenuClicked.bind(this);
    this._onCalloutDismiss = this._onCalloutDismiss.bind(this);
  }
  
  async _onCalloutDismiss() {
    if (this.state.email && this.state.password) {
      const { email } = this.state;
      await this.setState({
        email: '',
        password: ''
      });
      this.props.onLogin(email);
    }
    this.setState({
      email: '',
      password: '',
      isCalloutVisible: false
    });
  }

  _onShowMenuClicked() {
    this.setState({
      email: '',
      password: '',
      isCalloutVisible: !this.state.isCalloutVisible
    });
  }

  
  render() {
    let { isCalloutVisible } = this.state;
    return (
      <Header
        style={{
          background: '#fff',
          padding: 0,
          height: '60px',
          fontFamily:
            'BlinkMacSystemFont, "Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif'
        }}
      >
        <div className="ms-Grid">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-sm6 ms-md10 ms-lg10">Logo</div>
            <div className="ms-Grid-col ms-sm6 ms-md2 ms-lg2">
              <div ref={menuButton => (this._menuButtonElement = menuButton)}>
                <PrimaryButton
                  onClick={this._onShowMenuClicked}
                  text={isCalloutVisible ? 'Cancelar' : 'Login'}
                />
              </div>
              {isCalloutVisible &&
                <Callout
                  gapSpace={2}
                  targetElement={this._menuButtonElement}
                  onDismiss={this._onCalloutDismiss}
                  setInitialFocus={true}
                >
                  <div style={{padding: 15, minWidth: 50 }}>
                    <p className="ms-CalloutExample-title">
                      Login
                    </p>
                    <div className="ms-CalloutExample-inner">
                    <div className="ms-CalloutExample-content">
                      <TextField label='Correo' required={ true }
                        onChanged={email => this.setState({ email })}/>
                      <TextField label='Contraseña' required={ true }
                        onChanged={password => this.setState({ password })}/>
                      <PrimaryButton
                        type='password'
                        onClick={this._onCalloutDismiss}
                        disabled={this.state.email === '' || this.state.password === ''}
                        text='Aceptar'
                      />
                    </div>
                  </div>
                  </div>
                </Callout>}
            </div>
          </div>
        </div>
      </Header>
    );
  }
}
