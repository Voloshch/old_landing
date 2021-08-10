import React from 'react';
import { Container } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import { opportunitiesList } from 'packs/constants/features';
import FeaturesAndCapabilities from 'packs/components/elements/features_and_capabilities';

export default function ComputeOpportunities () {
  return (
    <section className='compute_opportunities'>
      <Container>
        <Translate value='compute.opportunities.title' tag='h2' />
        <FeaturesAndCapabilities array={opportunitiesList} className='opportunities' />
      </Container>
    </section>
  );
}
