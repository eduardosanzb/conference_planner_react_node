import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';
import Card from 'antd/lib/card';
// import Button from 'antd/lib/button';

export default class EventsGallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      events: props.events
    };
  }
  componentWillReceiveProps(nextProps) {
    const { events } = nextProps;
    if (events) {
      this.setState({ events });
    }
  }
  render() {
    const { events } = this.state;
    const settings = {
      dots: false,
      arrows: true,
			adaptiveHeight: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    if (events) {
      return (
        <div
          className="ms-Grid"
          style={{ backgroundColor: 'white', minHeight: 200, padding: 5, marginTop: 10 }}
        >
          <div className="ms-Grid row">
            <h2>Eventos para ti</h2>
          </div>
          <div className="ms-Grid row" style={{ height: 200 }}>
            <Slider {...settings}>
              {events.map(e =>
                <Card
                  key={e._id + Math.random()}
                  title={e.name}
                  extra={<Link to={`/events/${e._id}`}>Más</Link>}
                  style={{ width: 100, marginLeft: 5, height: 190 }}
                  loading={false}
                >
                  <div>
                    <img width='100%' alt="sdfsdf" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
										<p>{e.startDate}</p>
                  </div>
                </Card>
              )}
            </Slider>
          </div>
        </div>
      );
    }
    return <Spinner size={SpinnerSize.large} label="Cargando..." />;
  }
}

EventsGallery.propTypes = {
  events: PropTypes.array
};
