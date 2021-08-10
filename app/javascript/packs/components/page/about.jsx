import React from 'react';
import Menu from 'packs/components/elements/menu';
import { Container, Row, Col } from 'reactstrap';
import MainIllustration from 'images/landing/about/illustration.png';
import Footer from 'packs/components/elements/footer';
import InfoAboutCloud from 'packs/components/elements/info_about_cloud';
import WhatGet from 'packs/components/elements/what_get';
import Contact from 'packs/components/elements/contact';
import SupportedServices from 'packs/components/elements/supported_services'
import ScrollButton from 'packs/components/elements/scroll_button';
import { Translate } from '@davidqhr/react-i18nify';

export default class About extends React.Component {
  state = {
    lang: localStorage.getItem('language')
  }
  
  handler = lang => {
    this.setState({lang: lang});
  }

  render() {
    return (
      <div>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
        <Menu onLanguageChanged={this.handler}/>
  
        <section className='about_header'>
          <Container> 
            <Row>               
              <Col xl={{ order: 1 }} xs={{ order: 2}} className='about_title'>
                <Translate value='about.title' dangerousHTML tag='h1'/>
              </Col>
  
              <Col xl={{ order: 2 }} xs={{ order: 1}} className='image_hidden'>
                <img src={MainIllustration} width='100%'  alt='About header image'/>    
              </Col>
            </Row>  
          </Container>
        </section>
        
        <InfoAboutCloud />
        <WhatGet />
        <Contact lang={this.state.lang} />
        <SupportedServices title='about.learn_more_about_products' color='grey' />
        <Footer/>   
      </div>
    );
  }
}
