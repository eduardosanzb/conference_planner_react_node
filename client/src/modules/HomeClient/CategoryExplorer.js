import React from 'react';
import PropTypes from 'prop-types';
import {
  Spinner,
  SpinnerSize,
  DetailsList,
  DetailsListLayoutMode,
  Selection
} from 'office-ui-fabric-react';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';

const _columns = [
  {
    key: 'column1',
    name: 'Nombre',
    fieldName: 'firstName',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: 'column2',
    name: 'Apellido',
    fieldName: 'lastName',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  },
  {
    key: 'column2',
    name: 'Compañia',
    fieldName: 'company',
    minWidth: 100,
    maxWidth: 200,
    isResizable: true
  }
];

export default class CategoryExplorer extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      events: props.categories
    };
  }

  componentWillReceiveProps (nextProps) {
    const { categories } = nextProps;
    if (categories) {
      this.setState({ categories });
    }
  }
  render () {
    const { categories } = this.state;
    if (categories) {
      return (
        <div
          className="ms-Grid"
          style={{ backgroundColor: 'white', minHeight: 200, padding: 5 }}
        >
          <div className="ms-Grid row">
            <DetailsList
              items={categories}
              columns={_columns}
              setKey="set"
              layoutMode={DetailsListLayoutMode.fixedColumns}
              selectionPreservedOnEmptyClick
            />
          </div>
        </div>
      );
    }
    return <Spinner size={SpinnerSize.large} label="Cargando..." />;
  }
}

CategoryExplorer.propTypes = {
  categories: PropTypes.array
};
