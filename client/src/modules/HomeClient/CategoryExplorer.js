import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';
import Card from 'antd/lib/card';
import Button from 'antd/lib/button';

export default class CategoryExplorer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      events: props.categories
    };
  }

  componentWillReceiveProps(nextProps) {
    const { categories } = nextProps;
    if (categories) {
      this.setState({ categories });
    }
  }
  render() {
    const { categories } = this.state;
    if (categories) {
      return (
        <div
          className="ms-Grid"
          style={{ backgroundColor: 'white', minHeight: 200, padding: 5 }}
        >
          <div className="ms-Grid row">
            <h2>Explora eventos</h2>
          </div>
          <div className="ms-Grid row">
						<div className="ms-Grid-col ms-sm6 ms-md4"><Card></Card></div>
						<div className="ms-Grid-col ms-sm6 ms-md4"></div>
						<div className="ms-Grid-col ms-hiddenSm ms-md4"></div>
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
