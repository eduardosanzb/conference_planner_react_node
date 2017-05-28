import React from 'react';
import { Link } from 'react-router-dom';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer } = Layout;


class HeaderPage extends React.Component {
  
  render() {
    return (
    <Layout style={{ background: '#fff', overflow: 'auto', fontFamily: '"Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif' }}>
      <div className="logo"><img src="https://www.generationinitiative.org/wp-content/themes/generation/images/logos/generation-logo.svg" alt="Generation" /></div>
      <Header style={{ background: '#fff', padding: 0, height: '60px' }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ marginTop: 'auto', marginBottom: 'auto', maxHeight: '50px' }}
        >
          <Menu.Item key="1"><Link to='/'><Icon type="mail" />Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to='/roster'><i className="ms-Icon ms-Icon--Mail" aria-hidden="true"></i></Link></Menu.Item>
        </Menu>
      </Header>
  </Layout>
    );
  }
}

export default HeaderPage;