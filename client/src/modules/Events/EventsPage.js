import React from 'react';
import moment from 'moment';
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
import { fetchEvents } from '../../actions';
import _columns from './columns';
const { Content } = Layout;

const items = [
  {
    key: 'addRow',
    name: 'Agregar evento',
    icon: 'Add'
  },
  {
    key: 'deleteRow',
    name: 'Editar evento',
    icon: 'Edit'
  }
];

class EventsList extends React.Component {
  componentWillMount () {
    this.props.fetchEvents();
  }

  onRenderColumn = (item, index, column) => {
    const fieldContent = item[column.fieldName];
    if (column.key.includes('date')) {
      return <div>{moment(fieldContent).format('DD/MM/YYYY')}</div>;
    }
    return fieldContent;
  }

  render () {
    if (this.props.loginData.loggedIn === false) {
      // TODO redirect to /
      return null;
    }
    if (!Array.isArray(this.props.events) || this.props.events.length === 0) {
      return <Spinner size={SpinnerSize.large} label="Cargando..." />;
    }
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
          items={[
            { text: 'Inicio', key: 'home', href: '/' },
            { text: 'Eventos', key: 'events', href: '#' }
          ]}
        />
        <div
          className="ms-Grid"
          style={{ backgroundColor: 'white', minHeight: 200, padding: 5, marginTop: 10 }}
        >
         <CommandBar items={items} />
        <DetailsList
              items={this.props.events}
              columns={_columns}
              onRenderItemColumn={this.onRenderColumn}
              setKey="set"
              layoutMode={DetailsListLayoutMode.fixedColumns}
              selectionPreservedOnEmptyClick
            />
        </div>
      </Content>
    );
  }
}

function mapStateToProps ({ events, loginData }) {
  return {
    loginData,
    events: events.events
  };
}

export default connect(mapStateToProps, { fetchEvents })(EventsList);
