import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const { Header } = Layout;
const { SubMenu } = Menu;

const TABS = [
  { route: '/', icon: 'home', text: 'Home', permission: ['ADMIN', 'ORGANIZER']},
  { route: '/users', icon: 'user', text: 'Usuarios', permission: ['ADMIN'] },
  { route: '/events', icon: 'schedule', text: 'Eventos', permission: ['ADMIN', 'ORGANIZER'] },
  { route: '/buildings', icon: 'bank', text: 'Edificios', permission: ['ADMIN'] }
];

const renderTabs = (permission) => {
  return TABS.map(t => t.permission.some(p => p === permission) ?
    <Menu.Item key={t.route}>
      <Link to={t.route}><Icon type={t.icon} />{t.text}</Link>
    </Menu.Item> : null
  );
};

const showCMS = user =>
  user.permissions.some(p => p.name === 'ADMIN' || p.name === 'ORGANIZER');

export default function(props) {
  if (showCMS(props.user)) {
    return (
      <Header
        style={{
          background: '#fff',
          padding: 0,
          height: '60px',
          fontFamily:
            'BlinkMacSystemFont, "Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif'
        }} >
        <div className="ms-Grid">
          <div className="ms-Grid-col ms-sm1">
            <div className="logo" />
          </div>
          <div className="ms-Grid-col ms-sm9">
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[props.location.pathname]}
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                maxHeight: '50px'
              }}
            >
              {renderTabs(props.user.permissions[0].name)}
            </Menu>
          </div>
          <div className="ms-Grid-col ms-sm2">
            <Menu
              mode="horizontal"
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                maxHeight: '50px'
              }}
            >
              <SubMenu
                title={<span><Icon type="user" />{props.user.firstName}</span> }>
                  <Menu.Item key="setting:1"><Link to='/profile'>Perfil</Link></Menu.Item>
                  <Menu.Item key="setting:2"><a onClick={props.logout}>Salir</a></Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </Header>
    );
  }
  return (
      <Header
        style={{
          background: '#fff',
          padding: 0,
          height: '60px',
          fontFamily:
            'BlinkMacSystemFont, "Selawik UI WestEuropean","Selawik UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif'
        }} >
        <div className="ms-Grid">
          <div className="ms-Grid-col ms-sm10">
            <div className="logo" />
          </div>
          <div className="ms-Grid-col ms-sm2">
            <Menu
              mode="horizontal"
              style={{
                marginTop: 'auto',
                marginBottom: 'auto',
                maxHeight: '50px'
              }}
            >
              <SubMenu
                title={<span><Icon type="user" />{props.user.firstName}</span> }>
                  <Menu.Item key="setting:1">Perfil</Menu.Item>
                  <Menu.Item key="setting:2"><a onClick={props.logout}>Salir</a></Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
      </Header>
    );
};
