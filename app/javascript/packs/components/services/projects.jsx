import React from 'react';
import Menu from 'packs/components/elements/menu';
import ProjectsImg from 'images/landing/projects.png';
import OS from 'images/landing/openshift.png';
import DevOps from 'images/landing/devops.png';
import Management from 'images/landing/manage.svg';
import Resources from 'images/landing/setting.svg';
import Notifications from 'images/landing/npt.svg';
import Footer from 'packs/components/elements/footer';
import { Translate } from '@davidqhr/react-i18nify';
import ScrollButton from 'packs/components/elements/scroll_button';
import InfoSection from 'packs/components/elements/info_section';

export default function Projects () {
  return (
		<div className='projects'>
			<ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
			<Menu />
            <InfoSection className='projects' title='Projects' description='projects.description' documentationLink='https://help.icdc.io/projects/'/>
            <div className='get_started'>
                <div>
                    <Translate value={'projects.get_started'} tag='h2' />
                    <Translate value={'projects.get_staerted_desc'} tag='p' />
                </div>
                <img src={ProjectsImg} />
            </div>
            <div className='projects__features'>
                <div className='flex'>
                    <img src={Resources} />
                    <div>
                        <Translate value={'projects.resources'} tag='h6' />
                        <Translate className='small-font' value={'projects.resources_desc'} tag='p' />
                    </div>
                </div>
                <div className='flex'>
                    <img src={Management} />
                    <div>
                        <Translate value={'projects.management'} tag='h6' />
                        <Translate className='small-font' value={'projects.management_desc'} tag='p' />
                    </div>
                </div>
                <div className='flex'>
                    <img src={Notifications} />
                    <div>
                        <Translate value={'projects.notifications'} tag='h6' />
                        <Translate className='small-font' value={'projects.notifications_desc'} tag='p' />
                    </div>
                </div>
            </div>
            <div className='get_started'>
                <div>
                    <Translate value={'projects.quotas_title'} tag='h2' />
                    <Translate value={'projects.quotas_desc'} tag='p' />
                </div>
                <img src={ProjectsImg} />
            </div>
            <Translate value={'projects.related_services'} tag='h3' />
            <div className='related flex'>
                <div>
                    <img src={DevOps} />
                    <p>ICDC DevOps</p>
                </div>
                <div>
                    <img src={OS} />
                    <p>ICDC OpenShift</p>
                </div>
            </div>
			<Footer />
		</div>
	);
}
