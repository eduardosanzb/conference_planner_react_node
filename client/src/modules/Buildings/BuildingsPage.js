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
import { fetchBuildings } from '../../actions';
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

class BuildingsList extends React.Component {
  componentWillMount () {
    this.props.fetchBuildings();
  }

  onRenderColumn = (item, index, column) => {
    const fieldContent = item[column.fieldName];
    if (column.key.includes('date')) {
      return <div>{moment(fieldContent).format('DD/MM/YYYY')}</div>;
    }
    if (column.key === 'map') {
      console.log(fieldContent);
      const [lat, long] = fieldContent.split(',');
      console.log(lat);
      console.log(long);
      const url = `https://www.google.com/maps/preview/@${lat},${long},15z`;
      return <a href={url} target="_blank">MAPA</a>;
    }
    console.log(fieldContent);
    return fieldContent;
  }

  render () {
    if (this.props.loginData.loggedIn === false) {
      // TODO redirect to /
      return null;
    }
    if (!Array.isArray(this.props.buildings) || this.props.buildings.length === 0) {
      return <Spinner size={SpinnerSize.large} label="Cargando..." />;
    }
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
          items={[
            { text: 'Inicio', key: 'home', href: '/' },
            { text: 'Edificios', key: 'buildings', href: '#' }
          ]}
        />
        <div
          className="ms-Grid"
          style={{ backgroundColor: 'white', minHeight: 200, padding: 5, marginTop: 10 }}
        >
         <CommandBar items={items} />
        <DetailsList
              items={this.props.buildings}
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

function mapStateToProps ({ buildings, loginData }) {
  return {
    loginData,
    buildings: buildings.buildings
  };
}

export default connect(mapStateToProps, { fetchBuildings })(BuildingsList);
