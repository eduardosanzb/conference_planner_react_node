import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie
} from 'recharts';
import { connect } from 'react-redux';
import { login, fetchEvents } from '../../actions';
import { Breadcrumb } from 'office-ui-fabric-react';
import Layout from 'antd/lib/layout';
import Card from 'antd/lib/card';
// Components
import EventsGallery from '../HomeClient/EventsGallery';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];
const data2 = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 }
];

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 }
];

const data02 = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'C1', value: 100 },
  { name: 'C2', value: 200 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 }
];

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
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <PieChart width={400} height={200}>
                    <Pie
                      data={data01}
                      cx={200}
                      cy={200}
                      outerRadius={60}
                      fill="#8884d8"
                    />
                    <Pie
                      data={data02}
                      cx={200}
                      cy={200}
                      innerRadius={70}
                      outerRadius={90}
                      fill="#82ca9d"
                      label
                    />
                  </PieChart>
                </Card>
              </div>
              <div className="ms-Grid-col ms-sm5">
                <Card
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
                  bordered={false}
                  style={{ width: '100%', maxWidth: 210 }}
                >
                  <LineChart width={200} height={100} data={data}>
                    <Line
                      type="monotone"
                      dataKey="pv"
                      stroke="#8884d8"
                      strokeWidth={2}
                    />
                  </LineChart>
                </Card>
              </div>
              <div className="ms-Grid-col ms-sm4">
                <Card
                  bordered={false}
                  style={{ width: '100%' }}
                >
                  <AreaChart
                    width={200}
                    height={200}
                    data={data2}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="uv"
                      stackId="1"
                      stroke="#8884d8"
                      fill="#8884d8"
                    />
                    <Area
                      type="monotone"
                      dataKey="pv"
                      stackId="1"
                      stroke="#82ca9d"
                      fill="#82ca9d"
                    />
                    <Area
                      type="monotone"
                      dataKey="amt"
                      stackId="1"
                      stroke="#ffc658"
                      fill="#ffc658"
                    />
                  </AreaChart>
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
