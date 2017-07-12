import React from 'react';
import { connect } from 'react-redux';
import { login, fetchEvents } from '../../actions';
import { Breadcrumb } from 'office-ui-fabric-react';
import Layout from 'antd/lib/layout';
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
            <EventsGallery events={this.props.events}/>
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
          <h1>Hello {lastName}, {firstName}</h1>
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
