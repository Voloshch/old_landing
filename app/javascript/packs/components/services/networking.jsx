import React from 'react';
import Menu from 'packs/components/elements/menu';
import InfoSection from 'packs/components/elements/info_section';
import TryNow from 'packs/components/elements/try_now';
import Footer from 'packs/components/elements/footer';
import ScrollButton from 'packs/components/elements/scroll_button';
import NetworkingMainImg from 'images/landing/networking.png';
import { Container, Row, Col } from 'reactstrap';
import Translate from '@davidqhr/react-i18nify/build/lib/Translate';
import { networkingList, toDoNetworkingList, networksImg } from 'packs/constants/networking';
import FeaturesAndCapabilities from 'packs/components/elements/features_and_capabilities';
import NetworkImgList from 'packs/components/elements/networkImgList';

export default class Networking extends React.Component {
  render() {
    return (
      <div className='networking'>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
        <Menu />
        <InfoSection className='networking' title='Networking' description='networking.description' src={NetworkingMainImg} alt='Networking image' documentationLink='https://help.icdc.io/networking/'/>
          <main className='networking-wrapper'>
                <section className='whatIsVpc'>
                  <Container>
                    <Row className='wrapper'>
                      <Col xl={6}>
                        <Translate value='networking.whatIsVpc.title' tag='h2' />
                        <Translate value='networking.whatIsVpc.description' tag='p' dangerousHTML/>
                      </Col>
                      
                      <Col xl={6}>
                        <Translate value='networking.securityVpc.title' tag='h2' />
                        <Translate value='networking.securityVpc.description' tag='p' dangerousHTML />
                      </Col>
                    </Row>
                  </Container>
                </section>

                <section className='possibility toDoNetworking'>
                  <Container>
                    <Translate value='networking.toDoNetworking.title' tag='h2' />
                    <FeaturesAndCapabilities array={toDoNetworkingList} className='networking' columnWidth = {12} />
                  </Container>
                </section>

                <section className='tools speedVpc'>
                  <Container>
                      <Col className='wrapper center-block' xl={6}>
                        <Translate value='networking.speedVpc.title' tag='h2' />
                        <Translate value='networking.speedVpc.description' tag='p' />
                      </Col>
                  </Container>
                </section>

                <section className='possibility benefits-block'>
                  <Container>
                      <Translate value='networking.benefits.title' tag='h2' />
                      <FeaturesAndCapabilities array={networkingList} className='networking' />
                  </Container>
                </section>

                <section className='tools networksImg'>
                  <Container>
                      <Col className='center-block'>
                      <NetworkImgList className='networking' array={networksImg} value='networking.workWithNetworking.title' />
                      <a className='btn-documentation' href='https://help.icdc.io/'>
                      <Translate value='networking.workWithNetworking.documentation' tag='span' />
                      </a>
                      </Col>
                  </Container>
                </section>
          </main>
        <TryNow textTryNow='try_now.try_now' isHorizontal={true} />
        <Footer />
      </div>
    )
  }
}
