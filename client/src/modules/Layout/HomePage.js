import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import Layout from 'antd/lib/layout';
const { Content } = Layout;
const showCMS = user =>
  user.permissions.some(p => p.name === 'ADMIN' || p.name === 'ORGANIZER');

class Home extends React.Component {
  render() {
    if (!this.props.loginData.loggedIn) {
      return <div>Client home page with login</div>;
    }
    // user logged in, decide the type of user
    if (showCMS(this.props.loginData.user)) {
      const { firstName, lastName } = this.props.loginData.user;
      return (
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb items={[{ text: 'Home', key: 'home' }]} />
          <h1>Hello {lastName}, {firstName}</h1>
        </Content>
      );
    }
    return <div>client home page loggedIn</div>
  }
}
function mapStateToProps({ loginData }) {
  return { loginData };
}
export default connect(mapStateToProps, { login })(Home);
