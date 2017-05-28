import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    if (this.props.users.length === 0) {
      return <div>Loading ...</div>
    }
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map(u => <div key={u.id}>{u.username}</div>)}
      </div>
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