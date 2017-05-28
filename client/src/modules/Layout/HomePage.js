import React from 'react';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import { Layout } from 'antd';
const { Content } = Layout;

class Home extends React.Component {
  
  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb
        items={[
          { text: 'Home', 'key': 'home' }
        ]}/>
        <h1>Hello</h1>
      </Content>
    );
  }
}

export default Home;