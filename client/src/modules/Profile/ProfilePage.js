import React from 'react';
import Card from 'antd/lib/card';
import Badge from 'antd/lib/badge';
import Icon from 'antd/lib/icon';
import { Label } from 'office-ui-fabric-react/lib/Label';

// Styles
const centerContent = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const profileImg = {
  zIndex: '9',
  width: '15%',
  position: 'absolute',
  top: '50%',
  left: '5%',
  borderRadius: '90px'
};

export default class Profile extends React.PureComponent {
  eventsCount (title, count) {
    return (
      <div>
        <div className="ms-Grid-row">
          {title}
        </div>
        <div className="ms-Grid-row">
          <Badge count={count} />
        </div>
      </div>
    );
  }

  render () {
    return (
      <div className="ms-Grid" style={{ marginTop: 10 }}>
        <div className="ms-Row" style={centerContent}>
          <Card bordered={false} style={{ width: '90%' }}>
            <div className="ms-Grid-row">
              <img
                alt="sdfs"
                width="100%"
                style={{ maxHeight: 300 }}
                src="https://i2.wp.com/familypawn2017.com/wp-content/uploads/2017/03/header-image-8-4.jpg?ssl=1"
              />
              <img
                alt="sdfs"
                style={profileImg}
                src="https://yt3.ggpht.com/-YL73KcPdh0g/AAAAAAAAAAI/AAAAAAAAAAA/y-lsqPa9FzI/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
              />
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg3 ms-md2 ms-sm2" />
              <div className="ms-Grid-col ms-lg6 ms-md8 ms-sm8">
                <div className="ms-Grid-col ms-lg4 ms-md4 ms-sm12">
                  {this.eventsCount('Eventos', 15)}
                </div>
                <div className="ms-Grid-col ms-lg5 ms-md5 ms-sm12">
                  {this.eventsCount('Conferencias', 15)}
                </div>
                <div className="ms-Grid-col ms-lg3 ms-md3 ms-sm12">
                  {this.eventsCount('Talleres', 15)}
                </div>
              </div>
              <div className="ms-Grid-col ms-lg3 ms-md2 ms-sm2">
                <Icon
                  type="setting"
                  style={{ float: 'right', marginTop: '5%', fontSize: 24 }}
                />
              </div>
            </div>
          </Card>
        </div>

        <div className="ms-Grid-col ms-lg5 ms-md2 ms-sm2">
          <Card
            title="Eduardo Sanchez Bautista"
            bordered={false}
            style={{ marginTop: 10, marginBottom: 20, marginLeft: '10%' }}
          >
            <div className="ms-Grid-row">
              <Label>
                <i
                  className="ms-Icon ms-Icon--Suitcase"
                  style={{ fontSize: 16, marginRight: 8, fontWeight: 'bold' }}
                  aria-hidden="true"
                />{' '}
                Optilyz
              </Label>
            </div>
            <div className="ms-Grid-row">
              <Label>
                <i className="ms-Icon ms-Icon--ReadingMode"
                  style={{ fontSize: 16, marginRight: 8, fontWeight: 'bold' }}
                  aria-hidden="true"
                />{' '}
                UPAEP
              </Label>
            </div>
            <div className="ms-Grid-row">
              <Label>
                <i
                  className="ms-Icon ms-Icon--Mail"
                  style={{ fontSize: 16, marginRight: 8, fontWeight: 'bold' }}
                  aria-hidden="true"
                />{' '}
                eduardo@gmail.com
              </Label>
            </div>
            <div className="ms-Grid-row">
              <Label>
                <i
                  className="ms-Icon ms-Icon--Mail"
                  style={{ fontSize: 16, marginRight: 8, fontWeight: 'bold' }}
                  aria-hidden="true"
                />{' '}
                eduardo@gmail.com
              </Label>
            </div>
            <div className="ms-Grid-row">
              <Label>
                <i
                  className="ms-Icon ms-Icon--Mail"
                  style={{ fontSize: 16, marginRight: 8, fontWeight: 'bold' }}
                  aria-hidden="true"
                />{' '}
                eduardo@gmail.com
              </Label>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
