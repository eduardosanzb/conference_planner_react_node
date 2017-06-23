import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../../actions';
// components
import Menu from './menu';
import Login from './login';

class Header extends React.PureComponent {
	constructor(props) {
		super(props);
		console.log(props);
	}
	render() {
		if (!this.props.loginData.loggedIn) {
			return <Login onLogin={this.props.login}/>;
		}
		return <Menu user={this.props.loginData.user} location={this.props.location} />;
	}
}

function mapStateToProps({ loginData }) {
  return { loginData };
}
export default connect(mapStateToProps, { login })(Header);
