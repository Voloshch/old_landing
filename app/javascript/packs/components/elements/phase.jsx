import React from 'react';
import phase from 'packs/constants/phase';
import { Translate } from '@davidqhr/react-i18nify';
import { Container, Row, Col } from 'reactstrap';

const Phase = () => {
  const phaseList = phase.elements.map((listElement, index) => (
      <li key={index} className='phase-element'>
        <Translate className='phase-text' value={listElement.description} tag='span' />
      </li>
  ));
  return (
  <div className='section-wrapper'>
    <Container>
      <Row>
        <Translate value={phase.title} className='chevron-title' tag="p" />
      </Row>
      <Row>
        <Col xl={8} className='phase-container'>
        <ul>
          {phaseList}
        </ul>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Phase;
