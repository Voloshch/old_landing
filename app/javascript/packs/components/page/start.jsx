import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceCompute from 'images/landing/all_services/compute.png';
import ServiceDisk from 'images/landing/all_services/disk.png';
import ServiceCompliance from 'images/landing/all_services/compliance.png';
import ServiceDevOps from 'images/landing/all_services/devops.png';
import ServiceStorage from 'images/landing/all_services/storage.png';
import ServiceOpenShift from 'images/landing/all_services/openshift.png';
import ServiceArtifactory from 'images/landing/all_services/artifactory.png';
import Translate from '@davidqhr/react-i18nify/build/lib/Translate';


const services = [
  {
    href: 'https://compute.icdc.io/ui/service/',
    name: 'Compute',
    src: ServiceCompute
  },
  {
    href: 'https://disk.icdc.io/',
    name: 'Disk',
    src: ServiceDisk
  },
  {
    href: 'https://compliance.icdc.io/',
    name: 'Compliance',
    src: ServiceCompliance
  },
  {
    href: 'https://git.icdc.io/',
    name: 'Devops',
    src: ServiceDevOps
  },
  {
    href: 'https://cloud.icdc.io/storage',
    name: 'Storage',
    src: ServiceStorage
  },
  {
    href: 'https://artifactory.icdc.io/',
    name: 'Artifactory',
    src: ServiceArtifactory
  },
  {
    href: 'https://icdc.io/openshift',
    name: 'OpenShift',
    src: ServiceOpenShift
  }
]

export default class Start extends React.Component {
  render() {
    const servicesList = services.map((service, key) => (
      <div key={key} className='service_item'>
        <a href={service.href} target={service.target || '_blank'}>
          <img src={service.src} className={service.name.toLowerCase()} alt='Compute image' />
          <p className={service.name.toLowerCase()}>{service.name}</p>
        </a>
      </div>
    ));
    return (
      <div className='all_services_page'>
          <Row>
            {servicesList}
          </Row>
          <div className='link'>
            <Link to='/'><p><Translate value='start' /><FontAwesomeIcon icon='angle-right' /></p></Link>
          </div>
      </div>
    );
  }
}
