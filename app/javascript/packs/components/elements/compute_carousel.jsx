import React from 'react';
import { Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import AliceCarousel from 'react-alice-carousel';

export default class ComputeImage extends React.Component {
  responsive = {
    0: { items: 1 },
    400: { items: 2 },
    768: { items: 3 },
    1199: { items: 4 },
    1440: { items: 5 },
    1700: { items: 6 }
  };

  render() {
    const data = this.props.array.map((item, i) => (
      <div key={`key-${i}`} className={(item.className || '') + ' item'}>
        <div className='img-container'>
          <img className='default' src={item.img} alt='' />
        </div>
        <div className={(item.className || '') + ' txt-container'}>
          <p>{item.name}</p>
        </div>
      </div>
    ));
    return (
      <Row className='compute_carousel'>
        <Col xl={12}>
          <Translate value={this.props.title} tag='h3' />
        </Col>
        <div className='but'>
          <div className='button left' onClick={() => this.arr.slidePrev()} />
        </div>
        <AliceCarousel
              items={data}
              duration={400}
              autoPlay={false}
              startIndex={0}
              dotsDisabled={true}
              fadeOutAnimation={true}
              mouseDragEnabled={true}
              // playButtonEnabled={true}
              autoPlayInterval={2000}
              autoPlayDirection='ltl'
              responsive={this.responsive}
              disableAutoPlayOnAction={true}
              buttonsDisabled={true}
              ref={el => (this.arr = el)}
            />
        <div className='but'>
          <div className='button next' onClick={() => this.arr.slideNext()} />
        </div>
      </Row>
    )
  }
}
