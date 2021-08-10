import React from 'react';
import { Container, Row } from 'reactstrap';
import CodeImg from 'images/landing/services/devops/code.png';
import BaseImage from 'images/landing/services/devops/based_on.png';
import Menu from 'packs/components/elements/menu';
import TryNow from 'packs/components/elements/try_now';
import Footer from 'packs/components/elements/footer';
import { Translate } from '@davidqhr/react-i18nify';
import ScrollButton from 'packs/components/elements/scroll_button';
import InfoSection from 'packs/components/elements/info_section';
import { practices } from 'packs/constants/practices_and_interfaces';
import { devopsFeatures } from 'packs/constants/features';
import PracticesInterfaces from 'packs/components/elements/practices_interfaces';

export default class Code extends React.Component {
  render() {
    const featuresList = devopsFeatures.map((feature, featureKey) => (
      <div key={featureKey} className='featureText'>
        <Translate value={feature.title} tag='h3' />
        <Translate value={feature.description} tag='p' />
      </div>
    ))
    return (
      <React.Fragment>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
        <Menu />
        <div className='service_devops_section'>
          <InfoSection className='devops' title='Code' description='devops.description' src={CodeImg} alt='DevOps image' documentationLink='https://help.icdc.io/code/'/>
          <section className='circle_life'>
            <div className='text'>
              <Translate value='devops.lifecycle.title' tag='h2' />
              <Translate value='devops.lifecycle.description' tag='p' />
            </div>
          </section>

          <PracticesInterfaces className='devops' array={practices} value='devops.modern_software.title' />
          
          <section className='base_background'>
            <img src={BaseImage} alt='Base image' />
            <div className='text'>
              <Translate value='devops.gitlab.title' tag='h2' />
              <Translate value='devops.gitlab.description' tag='p' />
            </div>
          </section>

          <section id='features'>
            <Container>
              <Translate value='compute.opportunities.title' tag='h2' />
              <Row>
                <div className='line' />
                <div className='line two' />
                {featuresList}
              </Row>
            </Container>
          </section>
        </div>

        <TryNow textTryNow='try_now.try_now'/>
        <Footer />
      </React.Fragment>
    );
  }
}
