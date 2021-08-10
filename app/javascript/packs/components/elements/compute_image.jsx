import React from 'react';
import { Container } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import { operating_systems, click_apps } from 'packs/constants/os_and_apps';
import ComputeCarousel from 'packs/components/elements/compute_carousel';

export default function ComputeImage () {
  return (
    <section className='section_compute_image'>
      <Container>
        <Translate value='compute.provide.description' dangerousHTML tag='h2' />
        <ComputeCarousel title='compute.provide.os' array={operating_systems} />
        <ComputeCarousel title='compute.provide.apps' array={click_apps}/>
      </Container>
    </section>
  );
}
