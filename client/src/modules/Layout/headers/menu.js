import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const { Header } = Layout;

const TABS = [
  { route: '/', icon: 'home', text:'Home'},
  { route: '/users', icon: 'user', text:'Usuarios'},
  { route: '/events', icon: 'schedule', text:'Eventos'},
  { route: '/buildings', icon: 'bank', text:'Edificios'}
]

const renderTabs = () => {
  return TABS.map(t => <Menu.Item key={t.route}><Link to={t.route}><Icon type={t.icon} />{t.text}</Link></Menu.Item>);
};

const showCMS = user => user.permissions.some(p => p.name === 'ADMIN' || p.name === 'ORGANIZER');

export default function (props) {
  if (showCMS(props.user)) {
    return (
      <Header style={{ background: '#fff', padding: 0, height: '60px', fontFamily: 'BlinkMacSystemFont, "Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif' }}>
        <div className="logo"></div>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={[props.location.pathname]}          
          style={{ marginTop: 'auto', marginBottom: 'auto', maxHeight: '50px' }}>
          {renderTabs()}
        </Menu>
      </Header>
    );
  }
  return <div>client</div>
}

