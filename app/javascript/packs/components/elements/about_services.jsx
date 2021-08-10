import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Translate } from '@davidqhr/react-i18nify';
import { services } from 'packs/constants/services';

export default class AboutServices extends React.Component {
  render() {
    const servicesList = services.map((service, index) => (
      <div key={index} className='about_info'>
        <Row>     
          <Col  className={(index % 2 ? 'order-xl-last order-first ' : '') + 'img_col'}>
            <img src={service.imgSrc} alt={service.service + ' image'} className={service.service==='Compliance' ? 'compliance' : ''} />
          </Col>
          <Col className={index % 2 ? 'left order-xl-first order-last' : ''} >
            <h3>{service.service}</h3>
              <Translate value={'home.services.' + service.txtClass} dangerousHTML tag='p' />
              <Link to={'/' + service.txtClass}><Translate value='home.learn_more' tag='p' /></Link>
          </Col>
        </Row>        
        { index !== services.length-1 && <div className='line' /> }
      </div>
    ))

    return (
      <section id='section-about-services'>
        <Container>
          <Translate value='home.about_our_services' tag='h2' />
          {servicesList}
        </Container>
      </section>
    );
  }
}
