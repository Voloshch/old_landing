import React from 'react';
import { Container, Row } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';

export default function ImageWithText (props) {
  return (
    <section className={'img_txt ' + props.className}>
      <Container>
        <Row>
          <div className='left'>
            <img src={props.src} />
          </div>
          <div className='text'>
            <Translate value={props.title} tag='h2' />
            <Translate value={props.description} tag='p' />
          </div>
        </Row>
      </Container>
    </section>
  );
}
