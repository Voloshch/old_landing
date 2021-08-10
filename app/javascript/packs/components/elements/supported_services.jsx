import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { services } from 'packs/constants/services';
import { Container, Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';

export default class SupportedServices extends React.Component {
  responsive = {
    0: { items: 1 },
    400: { items: 2 },
    768: { items: 3 },
    1199: { items: 4 },
    1440: { items: 5 }
  };

  galleryItems() {
    return services.map((item, i) => (
      <a href={item.linkTo} target='_self'>
        <div key={`key-${i}`} className='item'>
          <div className=' img-container'>
            <img className='default' src={item.img} alt='' />
            <img className='hover' src={item.img_hover} alt='' />
          </div>
          <div className=' txt-container'>
            <Translate value={item.service} tag='p' dangerousHTML />
          </div>
        </div>
      </a>
    ));
  }

  render() {
    const items = this.galleryItems();
    return (
      <section className='supported_services_section'>
        <Container className={this.props.color || ''}>
          <Translate value={this.props.title} tag='h2'/>

          <Row id='carousel-row'>
            <Col className='carousel_button'>
              <div className='button left' onClick={() => this.Carousel.slidePrev()} />
            </Col>

            <Col className='carousel'>
              <AliceCarousel
                items={items}
                duration={400}
                autoPlay={true}
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
                ref={el => (this.Carousel = el)}
              />
            </Col>
            
            <Col className='carousel_button'>
              <div id='next' className='button' onClick={() => this.Carousel.slideNext()} />
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
