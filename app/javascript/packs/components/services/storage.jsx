import React from 'react';
import Menu from 'packs/components/elements/menu';
import ServiceStorage from 'images/landing/services/storage/illustration.png';
import Quality from 'images/landing/services/storage/quality.png';
import Footer from 'packs/components/elements/footer';
import TryNow from 'packs/components/elements/try_now';
import { Translate } from '@davidqhr/react-i18nify';
import ScrollButton from 'packs/components/elements/scroll_button';
import InfoSection from 'packs/components/elements/info_section';
import { interfaces } from 'packs/constants/practices_and_interfaces';
import PracticesInterfaces from 'packs/components/elements/practices_interfaces';
import TitledParagraph from 'packs/components/elements/titled_paragraph';

export default function Storage () {
  return (
    <div >
      <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
      <Menu />

      <div className='service_storage_section' >
        <InfoSection className='storage' title='Storage' description='storage.description' src={ServiceStorage} alt='Storage image' getAccessLink='/#try-cloud-section' isHash={true} documentationLink='https://help.icdc.io/storage/'/>

        <section className='reliable_and_efficient'>
          <div className='row'>
            <img src={Quality} height='100%' />

            <div className='text'>
              <Translate value='storage.storage_power.title' tag='h2' />
              <Translate value='storage.storage_power.description' tag='p' />
            </div>
          </div>
        </section>

        <PracticesInterfaces className='storage' array={interfaces} value='storage.interfaces.title' />

        <section id='object_storage'>
          <TitledParagraph title='storage.important.title' description='storage.important.description' />
          <TitledParagraph title='storage.important.moment.title' description='storage.important.moment.description' tag='strong_p' />

          <div className='div_row'>
            <div className='line' />
            <TitledParagraph className='benefits' title='storage.key_benefits' description='storage.important.scalable_description' />
            <TitledParagraph className='benefits' title='storage.reliable.title' description='storage.reliable.description' />
          </div>
        </section>

        <section id='block_storage'>
          <TitledParagraph title='storage.block_storage.title' description='storage.block_storage.description' />
          <TitledParagraph title='storage.key_benefits' description='storage.block_storage.key_benefits'/>
        </section>

        <section id='file_system'>
          <TitledParagraph title='storage.file_system.title' description='storage.file_system.description' />
          <TitledParagraph title='storage.key_benefits' description='storage.file_system.key_benefits' />
        </section>
      </div>

      <TryNow textTryNow='try_now.try_now' backgroundColor='grey' />
      <Footer />
    </div>
  );
}
