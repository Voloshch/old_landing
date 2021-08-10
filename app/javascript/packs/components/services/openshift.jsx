import React from 'react';
import Menu from 'packs/components/elements/menu';
import { Container } from 'reactstrap';
import ServiceOpenShift from 'images/landing/services/openshift/main_illustration.png';
import AdminImg from 'images/landing/services/devops_service/admin.png';
import ManageImg from 'images/landing/services/devops_service/manage.png';
import Software from 'images/landing/services/openshift/software.svg';
import Footer from 'packs/components/elements/footer';
import TryNow from 'packs/components/elements/try_now';
import { Translate } from '@davidqhr/react-i18nify';
import ScrollButton from 'packs/components/elements/scroll_button';
import InfoSection from 'packs/components/elements/info_section';
import { advantagesList } from 'packs/constants/openshift';
import FeaturesAndCapabilities from 'packs/components/elements/features_and_capabilities';

export default function OpenShift () {
  return (
		<div>
			<ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
			<Menu />
			<div id='service_openshift_section'>
				<InfoSection
					className='openshift'
					title='OpenShift Container Platform'
					description='openshift.subtitle'
					src={ServiceOpenShift}
					alt='Openshift image'
					getAccessLink='/#try-cloud-section'
					isHash={true}
					documentationLink='https://help.icdc.io/openshift/'
				/>

				<section className='oc_description'>
					<Container>
						<div className='column'>
							<img src={Software} />
							<Translate value='openshift.description' tag='p' dangerousHTML />
						</div>
					</Container>
				</section>

				<section className='properties'>
					<div className='advantages'>
						<Container>
							<div className='advantages_block'>
								<div>
									<img src={ManageImg}/>
									<Translate value='openshift.advantages.for_business' tag='h3' />
									<Translate value='openshift.advantages.business_advantages' tag='p' dangerousHTML />
								</div>
								<div>
									<img src={AdminImg}/>
									<Translate value='openshift.advantages.for_developers' tag='h3' />
									<Translate value='openshift.advantages.developers_advantages' tag='p' dangerousHTML />
								</div>
							</div>
						</Container>
					</div>
				</section>

				<section id='oc-advantages'>
					<Container>
					<Translate className='advantages-title' value='openshift.advantages.title' tag='h2' />
						<FeaturesAndCapabilities array={advantagesList} className='openshift' />
					</Container>
				</section>
			</div>

			<TryNow textTryNow='try_now.try_now' backgroundColor='grey' />
			<Footer />
		</div>
	);
}
