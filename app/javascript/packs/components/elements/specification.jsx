import React from 'react';
import Service from 'packs/components/elements/service'
import { Translate } from '@davidqhr/react-i18nify';
import Ceph from 'images/icons/ceph.png';
import Compliance from 'images/icons/compliance_logo.png';
import Daux from 'images/icons/daux.png';
import Devops from 'images/icons/devops_img1.png';
import Disk1 from 'images/icons/disk_img1.png';
import Disk2 from 'images/icons/disk_img2.png';
import Disk3 from 'images/icons/disk_img3.png';
import Disk4 from 'images/icons/disk_img4.png';
import Elk from 'images/icons/elk.png';
import Foreman from 'images/icons/foreman.png';
import Gitlab from 'images/icons/gitlab.png';
import Gluster from 'images/icons/gluster.png';
import Haproxy from 'images/icons/haproxy.png';
import HelpDesk from 'images/icons/helpdesk.png';
import KeepAlived from 'images/icons/keepalived.png';
import ManageIQ from 'images/icons/manageiq.png';
import MonitoringLogo from 'images/icons/monitoring_logo.png';
import Okd from 'images/icons/okd.png';
import Ovirt from 'images/icons/ovirt.png';
import Redmine from 'images/icons/redmine.png';
import Staytus from 'images/icons/staytus.png';
import Zabbix from 'images/icons/zabbix.png';
import Artifactory from 'images/icons/artifactory.png';
import Clair from 'images/icons/clair.png';
import Code from 'images/icons/code.png';
import Jenkins from 'images/icons/jenkins_icon.png';
import Kubernetes from 'images/icons/kubernetes.png';
import Openshift from 'images/icons/openshift.png';
import Sonarqube from 'images/icons/sonarqube.png';


export default function Specification () {
  return (
    <section className='specification'>
      <div className='complex_info'>
        <Translate value='cloud.specifications.title' dangerousHTML tag='h3'/>
        <Translate value='cloud.specifications.description' dangerousHTML tag='p'/>
      </div>
      <Translate value='cloud.specifications.services1' dangerousHTML tag='h3'/>
      <Service text='cloud.specifications.compute' images_array={[ManageIQ, Ovirt, Ceph, Haproxy, KeepAlived, Foreman]} />
      <Service text='cloud.specifications.openshift' images_array={[Okd, Gluster, Ceph, Haproxy, KeepAlived]} />
      <Service text='cloud.specifications.storage' images_array={[Ceph, Haproxy, KeepAlived]} />

      <Translate value='cloud.specifications.services2' dangerousHTML tag='h3'/>
      <Service text='cloud.specifications.disk' images_array={[Disk1, Disk2, Disk3, Disk4, Ceph]} />
      <Service text='cloud.specifications.devops' images_array={[Gitlab, Artifactory, Openshift, Kubernetes, Code, Jenkins, Sonarqube, Clair]} />
      <Service text='cloud.specifications.code' images_array={[Code]} />

      <Translate value='cloud.specifications.services3' dangerousHTML tag='h3'/>
      <Service text='cloud.specifications.compliance' images_array={[Compliance]} />
      <Service text='cloud.specifications.helpdesk' images_array={[HelpDesk, Staytus, Redmine, Daux]} />
      <Service text='cloud.specifications.monitoring' images_array={[Zabbix, MonitoringLogo, Elk]} />
    </section>
  )
}
