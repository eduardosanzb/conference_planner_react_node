import React from 'react';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Layout, Icon } from 'antd';
const { Footer } = Layout;

class FooterComponent extends React.Component {
  render() {
    return (
      <Footer style={{ textAlign: 'center' }}>
            UPAEP ©2017 Created with <span><Icon type="heart" /><span> by the IT department</span></span>
      </Footer>
    );
  }
}

export default FooterComponent;
