import React from 'react';
import { connect } from 'react-redux';
import Layout from 'antd/lib/layout';
const { Content } = Layout;
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
// Redux
import { fetchUsers } from '../../actions';
class UsersList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    if (this.props.users.length === 0) {
      return <div>Loading ...</div>
    }
    return (
      <Content style={{ padding: '0 50px' }}>
      <Breadcrumb
        items={[
          { text: 'Home', 'key': 'home', href: '/' },
          { text: 'Users', 'key': 'users' }
        ]}/>
        <h1>Users</h1>
        {this.props.users.map(u => <div key={u.id}>*{u.username}</div>)}
    </Content>
    );
  }
}

UsersList.defaultProps = {
  users: []
};

function mapStateToProps({ users }) {
  return {
    users: users.users
  };
}

export default connect(mapStateToProps, { fetchUsers })(UsersList);