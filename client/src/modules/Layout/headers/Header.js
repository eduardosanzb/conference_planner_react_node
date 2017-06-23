import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, logout } from '../../../actions';
// components
import Menu from './menu';
import Login from './login';

class Header extends React.PureComponent {
	render() {
		if (!this.props.loginData.loggedIn) {
			return <Login onLogin={this.props.login}/>;
		}
		return (
			<Menu
				user={this.props.loginData.user}
				location={this.props.location}
				logout={this.props.logout}/>
			);
	}
}

function mapStateToProps({ loginData }) {
  return { loginData };
}
export default connect(mapStateToProps, { login, logout })(Header);
