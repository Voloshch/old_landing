import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Translate } from '@davidqhr/react-i18nify';
import { features } from 'packs/constants/features';
import FeaturesAndCapabilities from 'packs/components/elements/features_and_capabilities';

export default function Functional () {
  return (    
    <section id='functional-section'>
      <Container id='functional-cont'>
        <Row> 
          <Col xl={3} lg={12}  >
            <Translate value='home.functional.title' tag='h2' />
              <Translate className='description_functional' value='home.functional.description' tag='p' />                    
            <Row>
              <Col className='about_button'>
                <Link to='/about'>
                  <Button className='blue' >
                    <Translate value='menu.about_us' />
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col id='text' xl={{offset: '1', size: '8'}} lg={12}>
            <FeaturesAndCapabilities array={features} className='features'/>
          </Col>
        </Row>    
      </Container>          
    </section>
  );
}
