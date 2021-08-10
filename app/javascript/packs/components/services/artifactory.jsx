import React from 'react';
import Menu from 'packs/components/elements/menu';
import InfoSection from 'packs/components/elements/info_section';
import TryNow from 'packs/components/elements/try_now';
import Footer from 'packs/components/elements/footer';
import ScrollButton from 'packs/components/elements/scroll_button';
import ArtifactoryMainImg from 'images/landing/artifactory.png';
import { Container, Row, Col } from 'reactstrap';
import Tools from 'images/landing/laptop.svg';
import Supply from 'images/landing/supply.png';
import Integration from 'images/landing/integration.svg';
import Translate from '@davidqhr/react-i18nify/build/lib/Translate';

export default class Artifactory extends React.Component {
  render() {
    return (
      <div className='artifactory'>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
        <Menu />
        <InfoSection className='artifactory' title='Artifactory' description='artifactory.description' src={ArtifactoryMainImg} alt='Artifactory image' documentationLink='https://help.icdc.io/artifactory/'/>

        <section className='provision'>
          <Container>
            <Row className='wrapper'>
              <Col xl={6}>
                <Translate value='artifactory.workflow.title' tag='h2' />
                <Translate value='artifactory.workflow.description' tag='p' dangerousHTML />
              </Col>
              
              <Col xl={6}>
                <Translate value='artifactory.provision.title' tag='h2' />
                <Translate value='artifactory.provision.description' tag='p' dangerousHTML />
              </Col>
            </Row>
          </Container>
        </section>

        <section className='tools'>
          <Container>
            <Row className='wrapper'>
              <Col className='tools_img' xl={6}>
                <img src={Tools} />
              </Col>
              
              <Col xl={6}>
                <Translate value='artifactory.formats_support.title' tag='h2' />
                <Translate value='artifactory.formats_support.description' tag='p' dangerousHTML/>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='supply_chain'>
          <Container>
            <Row className='wrapper'>
              <Col xl={6}>
                <div className='suply_text'>
                  <Translate value='artifactory.supply_chain.title' tag='h2' />
                  <Translate className='description' value='artifactory.supply_chain.description' tag='p' dangerousHTML/>
                </div>
              </Col>

              <Col className='supply_img' xl={6}>
                <img src={Supply} />
              </Col>
            </Row>
          </Container>
        </section>

        <section className='integration'>
          <Container>
            <Row className='wrapper'>
              <div className='integration_img'>
                <img src={Integration} />
              </div>

              <div className='integration_text'>
                <Translate value='artifactory.integration.title' tag='h2' />
                <Translate value='artifactory.integration.description' tag='p' dangerousHTML/>
              </div>
            </Row>
          </Container>
        </section>

        <TryNow textTryNow='artifactory.empower' />
        <Footer />
      </div>
    )
  }
}
