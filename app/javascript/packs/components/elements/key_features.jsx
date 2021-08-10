import React from 'react';
import { Container, Row } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import Dashboard from 'images/landing/dashboard.png';

export default function KeyFeatures () {
  return (
    <section id='key_features'>
      <Container>
        <Row>
          <div className='text'>
            <Translate value='compliance.key_features.title' tag='h2' />
            <Translate value='compliance.key_features.description' tag='p' dangerousHTML />
          </div>
          <div className='dashboard'>
            <img src={Dashboard} />
          </div>
        </Row>
      </Container>
    </section>
  );
}
