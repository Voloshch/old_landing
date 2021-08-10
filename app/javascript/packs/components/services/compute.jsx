import React from 'react';
import Menu from 'packs/components/elements/menu';
import { Container, Row } from 'reactstrap';
import ServiceCompute from 'images/landing/services/compute/illustration_compute.png';
import Footer from 'packs/components/elements/footer';
import TryNow from 'packs/components/elements/try_now';
import ComputeImage from 'packs/components/elements/compute_image';
import ComputeOpportunities from 'packs/components/elements/compute_opportunities';
import Gpu from 'packs/components/elements/gpu';
import { Translate } from '@davidqhr/react-i18nify';
import ScrollButton from 'packs/components/elements/scroll_button';
import InfoSection from 'packs/components/elements/info_section';
import ForWhom from 'images/landing/services/compute/team.svg';

export default function Compute () {
  return (
    <div>
      <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
      <Menu />
      <div className='service_compute_section'>
        <InfoSection className='compute' title='Compute' description='compute.description' src={ServiceCompute} alt='Compute image' documentationLink='https://help.icdc.io/compute/'/>
        <section className='for_whom_background'>
          <Container>
            <Row>
              <img src={ForWhom} className='image_hidden' />
              <div className='for_whom_text'>
                <Translate value='compute.for_whom.title' tag='h2' />
                <Translate value='compute.for_whom.description' tag='p' />
              </div>
            </Row>
          </Container>
        </section>

        <ComputeImage />
        <ComputeOpportunities />
        <Gpu />

        <TryNow textTryNow='try_now.are_you_ready' backgroundColor='grey' />
        <Footer />
      </div>
    </div>
  );
}
