import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import { aboutUs } from 'packs/constants/about_us';

export default class InfoAboutCloud extends React.Component {
  render() {
    const info = aboutUs.map((item, index) => (
      <div key={index}>
        <Row>
          <Col className={(index % 2 ? ' ' : 'order-lg-last ') + 'img-col '} >
            <img  className={item.reflection && 'reflection'} src={item.src} alt={item.alt}/>        
          </Col>
          <Col className={(index % 2 ? 'right ' : 'order-lg-first ') + 'txt-col'} >
            <Translate value={item.title} tag='h2'/>
            <Translate value={item.description} dangerousHTML tag='p'/>
          </Col>
        </Row>     
        { index !== aboutUs.length-1 && <div className='line' /> }
      </div>
    ));
    return (
      <section className='info_about_cloud'>
        <Container>
          {info}             
        </Container>  
      </section>
    );
  }
}
