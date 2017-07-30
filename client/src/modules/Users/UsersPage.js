import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from 'antd/lib/layout';
import {
  CommandBar,
  Breadcrumb,
  Spinner,
  SpinnerSize,
  DetailsList,
  DetailsListLayoutMode
} from 'office-ui-fabric-react';
import { fetchUsers } from '../../actions';
import _columns from './columns';
const { Content } = Layout;

const items = [
  {
    key: 'addRow',
    name: 'Agregar usuario',
    icon: 'Add'
  },
  {
    key: 'deleteRow',
    name: 'Editar usuario',
    icon: 'Edit'
  }
];

class UsersList extends React.Component {
  componentWillMount () {
    this.props.fetchUsers();
  }

  render () {
    if (this.props.loginData.loggedIn === false) {
      // TODO redirect to /
      return null;
    }
    if (!Array.isArray(this.props.users) || this.props.users.length === 0) {
      return <Spinner size={SpinnerSize.large} label="Cargando..." />;
    }
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
          items={[
            { text: 'Inicio', key: 'home', href: '/' },
            { text: 'Usuarios', key: 'users', href: '#' }
          ]}
        />
        <div
          className="ms-Grid"
          style={{ backgroundColor: 'white', minHeight: 200, padding: 5, marginTop: 10 }}
        >
         <CommandBar items={items} />
        <DetailsList
              items={this.props.users}
              columns={_columns}
              setKey="set"
              layoutMode={DetailsListLayoutMode.fixedColumns}
              selectionPreservedOnEmptyClick
            />
        </div>
      </Content>
    );
  }
}

function mapStateToProps ({ users, loginData }) {
  return {
    loginData,
    users: users.users
  };
}
UsersList.propTypes = {
  users: PropTypes.array,
  fetchUsers: PropTypes.func,
  loginData: PropTypes.object
};
export default connect(mapStateToProps, { fetchUsers })(UsersList);
