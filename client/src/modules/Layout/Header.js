import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const { Header } = Layout;

const TABS = [
  { route: '/', icon: 'home', text:'Home'},
  { route: '/users', icon: 'user', text:'Users'},
  { route: '/contact', icon: 'mail', text:'Contact'}
]

const renderTabs = () => {
  return TABS.map(t => <Menu.Item key={t.route}><Link to={t.route}><Icon type={t.icon} />{t.text}</Link></Menu.Item>);
};

export default function (props) {
  return (
      <Header style={{ background: '#fff', padding: 0, height: '60px', fontFamily: '"Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif' }}>
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
