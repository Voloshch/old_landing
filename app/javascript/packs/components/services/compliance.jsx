import React from 'react';
import Menu from 'packs/components/elements/menu';
import InfoSection from 'packs/components/elements/info_section';
import KeyFeatures from 'packs/components/elements/key_features';
import SimpleAndFast from 'packs/components/elements/simple_and_fast';
import AskedQuestions from 'packs/components/elements/asked_questions';
import TryNow from 'packs/components/elements/try_now';
import Footer from 'packs/components/elements/footer';
import ScrollButton from 'packs/components/elements/scroll_button';
import Password from 'images/landing/password.svg';
import Calendar from 'images/landing/calendar.svg';
import ImageWithText from 'packs/components/elements/image_with_text';
import ComplianceInfo from 'images/landing/copliance.png';

export default function Compliance () {
  return (
    <div>
      <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
      <Menu />
      <InfoSection className='compliance' title='Compliance' description='compliance.description' src={ComplianceInfo} alt='Compliance image' getAccessLink='https://compliance.icdc.io' documentationLink='https://help.icdc.io/compliance/'/>
      <ImageWithText src={Password} title='compliance.server_security.title' className='password' description='compliance.server_security.description' />
      <KeyFeatures />
      <SimpleAndFast />
      <ImageWithText src={Calendar} title='compliance.schedule.title' className='calendar' description='compliance.schedule.description' />
      <AskedQuestions />
      <TryNow textTryNow='try_now.try_now' backgroundColor='grey' />
      <Footer />
    </div>
  );
}
