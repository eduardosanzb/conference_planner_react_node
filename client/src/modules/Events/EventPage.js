import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Layout from 'antd/lib/layout';
import Card from 'antd/lib/card';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import {
  Breadcrumb,
  PrimaryButton,
  Spinner,
  SpinnerSize
} from 'office-ui-fabric-react';

import { showCMS } from '../../lib';
import { fetchEvent } from '../../actions';
// const { Content } = Layout;
const centerContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

class EventPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: null,
      currentSlide: 'home'
    };
  }
  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (this.state.event !== nextProps.event) {
      this.setState({ event: nextProps.event });
    }
  }
  _handleMenu = e => {
    console.log(e);
    this.setState({ currentSlide: e.key });
  };
  _renderContent = () => {
    switch(this.state.currentSlide) {
      case 'home':
        return <div>home</div>
      case 'news':
        return <div>news</div>
      case 'conferences':
        return <div>conferences</div>
      case 'sponsors':
        return <div>sponsors</div>
      case 'schedule':
        return <div>schedule</div>
    }
  }
  render() {
    const { event } = this.state;
    if (event) {
      const date = new Date(event.startDate);
      return (
        <div className="ms-Grid" style={{ marginTop: 10 }}>
          {this.props.loggedIn &&
            showCMS(this.props.user) &&
            <div className="ms-Row">
              <Breadcrumb
                items={[
                  { text: 'Inicio', key: 'home', href: '/' },
                  { text: 'Eventos', key: 'events', href: '/events' },
                  { text: event.name.toLowerCase(), key: event._id, href: '#' }
                ]}
              />
            </div>}
          <div className="ms-Row" style={centerContent}>
            <Card bordered={false} style={{ width: '90%' }}>
              <div className="ms-Grid-row">
                <img
                  width="100%"
                  style={{ maxHeight: 200 }}
                  src="https://i2.wp.com/familypawn2017.com/wp-content/uploads/2017/03/header-image-8-4.jpg?ssl=1"
                />
              </div>

              <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-sm12 ms-lg1">
                  <Card
                    bordered={false}
                    bodyStyle={{
                      backgroundColor: '#ECECEC',
                      textAlign: 'center'
                    }}
                  >
                    <h1 style={{ color: 'red' }}>
                      {date.getDay()}
                    </h1>
                    <b>
                      {moment(date).format('MMM')}
                    </b>
                  </Card>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-lg-9">
                  <h1>
                    {event.name}
                  </h1>
                  <h3>
                    {event.description.slice(0, 50)}...
                  </h3>
                </div>
                <div className="ms-Grid-col ms-sm12 ms-lg2">
                  {this.props.loggedIn &&
                    <PrimaryButton
                      // TODO: clean this code
                      iconProps={
                        this.props.user.events.find(e => e._id === event._id)
                          ? 'Add'
                          : 'User'
                      }
                      text={
                        this.props.user.events.find(e => e._id === event._id)
                          ? 'Add'
                          : 'Remove'
                      }
                    />}
                  {!this.props.loggedIn &&
                    <PrimaryButton
                      iconProps={{ iconName: 'Add' }}
                      text="Subscribirme"
                    />}
                </div>
              </div>
              <div className="ms-Grid-row" style={{ minWidth: '100%' }}>
                <Menu
                  mode="horizontal"
                  onClick={this._handleMenu}
                  selectedKeys={[this.state.currentSlide]}
                >
                  <Menu.Item key="home">
                    {' '}<Icon type="home" />Inicio
                  </Menu.Item>
                  <Menu.Item key="news">
                    {' '}<Icon type="info-circle" />Noticias
                  </Menu.Item>
                  <Menu.Item key="conferences">
                    {' '}<Icon type="laptop" />Conferencias
                  </Menu.Item>
                  <Menu.Item key="sponsors">
                    {' '}<Icon type="gift" />Patrocinadores
                  </Menu.Item>
                  <Menu.Item key="schedule">
                    {' '}<Icon type="appstore-o" />Agenda
                  </Menu.Item>
                </Menu>
              </div>
            </Card>
          </div>
          
          <div className="ms-Row" style={{...centerContent, marginTop: 15, marginBottom: 20}}>
            <Card bordered={false} style={{ width: '90%' }}>
              {this._renderContent()}
            </Card>
          </div>

        </div>
      );
    }
    return (
      <div style={{ marginTop: 10 }}>
        <Spinner size={SpinnerSize.large} label="Cargando..." />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.events.currentEvent,
    loggedIn: state.loginData.loggedIn,
    user: state.loginData.user
  };
}

EventPage.propTypes = {
  event: PropTypes.object
};

export default connect(mapStateToProps, { fetchEvent })(EventPage);
