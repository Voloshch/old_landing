import React from 'react';
import DevOpsDesc from 'packs/components/elements/devopsdesc';
import Phase from 'packs/components/elements/phase';
import Pipeline from 'packs/components/elements/pipeline';
import Control from 'packs/components/elements/control';
import Possibility from 'packs/components/elements/possibility';
import Tools from 'packs/components/elements/tools';
import Brand from 'packs/components/elements/brand';
import Db from 'packs/components/elements/db';
import Footer from 'packs/components/elements/footer';
import TryNow from 'packs/components/elements/try_now';
import ScrollButton from 'packs/components/elements/scroll_button';
import Menu from 'packs/components/elements/menu';
import InfoSection from 'packs/components/elements/info_section';
import ServiceDevOps from 'images/landing/services/devops/main_ illustration.png';

export default class DevOps extends React.Component {
  render() {
    return (
      <div>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
        <Menu />
        <div className='service_devops_section'>
          <InfoSection
            className='devops'
            title='DevOps as a Service'
            description='devopsservice.description'
            src={ServiceDevOps}
            alt='DevOps image'
            documentationLink='https://help.icdc.io/devops/'
          />
        </div>
        <DevOpsDesc />
        <Phase />
        <Pipeline />
        <Possibility />
        <Control />
        <Brand />
        <Db />
        <Tools />
        <TryNow textTryNow='try_now.try_now' />
        <Footer />
      </div>
    );
  }
}
