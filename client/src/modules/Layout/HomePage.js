import React from 'react';
import { connect } from 'react-redux';
import { login, fetchEvents } from '../../actions';
import { Breadcrumb } from 'office-ui-fabric-react';
import Layout from 'antd/lib/layout';
import Card from 'antd/lib/card';
// Components
import EventsGallery from '../HomeClient/EventsGallery';

const { Content } = Layout;
const showCMS = user =>
  user.permissions.some(p => p.name === 'ADMIN' || p.name === 'ORGANIZER');

class Home extends React.Component {
  componentWillMount () {
    this.props.fetchEvents();
  }

  render () {
    if (!this.props.loginData.loggedIn || !showCMS(this.props.loginData.user)) {
      return (
        <div className="ms-Grid">
          <Content style={{ padding: '0 50px' }}>
            <EventsGallery events={this.props.events} />
          </Content>
        </div>
      );
    }
    // user logged in, decide the type of user
    if (showCMS(this.props.loginData.user)) {
      const { firstName, lastName } = this.props.loginData.user;
      return (
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb items={[{ text: 'Home', key: 'home' }]} />
          <h1>
            Hello {lastName}, {firstName}
          </h1>
          <div className="ms-Grid" style={{ marginTop: 10 }}>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm4">
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
              <div className="ms-Grid-col ms-sm5">
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
              <div className="ms-Grid-col ms-sm3">
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            </div>
            <div className="ms-Grid-row" style={{ marginTop: 10 }}>
              <div className="ms-Grid-col ms-sm8">
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
              <div className="ms-Grid-col ms-sm4">
                <Card
                  title="Card title"
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <p>Card content</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Card>
              </div>
            </div>
          </div>
        </Content>
      );
    }
  }
}
function mapStateToProps ({ loginData, events }) {
  return {
    loginData,
    events: events.events
  };
}
export default connect(mapStateToProps, { login, fetchEvents })(Home);
