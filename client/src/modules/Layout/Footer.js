import React from 'react';
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
const { Footer } = Layout;

class FooterComponent extends React.Component {
  render () {
    return (
      <div style={{ textAlign: 'center', maxHeight: 20 }}>
        <Footer >
            UPAEP ©2017 Creado con <span><Icon type="heart" /><span> por @eduardosanzb</span></span>
      </Footer>
      </div>
    );
  }
}

export default FooterComponent;
