import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';

const get_lists = [
  'about.what_we_get.reliability',
  'about.what_we_get.design',
  'about.what_we_get.knowledge_base',
  'about.what_we_get.web_tools',
  'about.what_we_get.support',
  'about.what_we_get.lifetime', 
]   

export default class WhatGet extends React.Component {
  render() {
    const what_get_list = get_lists.map((title, id) =>
      <Col sm={6} lg={4} xl={2} key={id}>
        <div className='get_list_image'></div> 
        <Translate value={title} tag='p' />   
      </Col>     
    );
    return (
      <section className='what_get'>
        <Container> 
          <Translate value='about.what_we_get.title' tag='h2' />
          <Row>                    
            { what_get_list }
          </Row>  
        </Container>
      </section>
    );
  }
}
