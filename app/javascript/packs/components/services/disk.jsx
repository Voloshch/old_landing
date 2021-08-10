import React from 'react';
import Menu from 'packs/components/elements/menu';
import { Container, Row } from 'reactstrap';
import ServiceDisk from 'images/landing/services/disk/illustration.png';
import CLoudFiles from 'images/landing/services/disk/cloud_files.png';
import Footer from 'packs/components/elements/footer';
import TryNow from 'packs/components/elements/try_now';
import { Translate } from '@davidqhr/react-i18nify';
import ScrollButton from 'packs/components/elements/scroll_button';
import InfoSection from 'packs/components/elements/info_section';
import DiskCapabilities from 'packs/components/elements/disk_capabilities';

export default function Disk () {
  return (
    <div >
      <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
      <Menu />
      
      <div className='service_disk_section'>
        <InfoSection className='disk' title='Disk' description='disk.description' src={ServiceDisk} alt='Disk image' getAccessLink='https://disk.icdc.io/' documentationLink='https://help.icdc.io/disk/'/>

        <section className='second'>
          <Container>
            <Row>
              <div className='left'>
                <Translate value='disk.cloud_disk.title' tag='h3' />
                <Translate value='disk.cloud_disk.description' tag='p' />

                <div className='cloud_img'>
                  <img src={CLoudFiles} alt='cloud files image' />
                </div>
              </div>

              <div className='right'>
                <Translate value='disk.cloud_disk.for_humans.title' tag='h3' />
                <Translate value='disk.cloud_disk.for_humans.description' tag='p' />
                <Translate value='disk.cloud_disk.for_projects.title' tag='h3' />
                <Translate value='disk.cloud_disk.for_projects.description' tag='p' />
              </div>
            </Row>
          </Container>
        </section>

        <DiskCapabilities />
      </div>

      <TryNow textTryNow='try_now.try_now' />
      <Footer />
    </div>
  );
}
