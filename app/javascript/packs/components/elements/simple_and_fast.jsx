import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';

export default class SimpleAndFast extends React.Component {
  render() {
    const steps = Array(3).fill().map((_, index) => (
      <Row key={index}>
        <div className='blue_circle '>
          <h4>{index + 1}</h4>
        </div>
        <Col>
          <Translate value={'compliance.simple_and_fast.step' + (index + 1)} tag='p' />
        </Col>
      </Row>
    ));
    return (
      <section id='sipmle_and_fast'>
        <Container>
          <Translate value='compliance.simple_and_fast.title' tag='h2' />
          <div className='col_container'>
            <Row>
              <div className='line' />
            </Row>
            {steps}
          </div>
        </Container>
      </section>
    );
  }
}
