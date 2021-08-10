import ServiceCompute from 'images/landing/compute_pic.png';
import ServiceDisk from 'images/landing/cloud_disk.png';
import ServiceDevOps from 'images/landing/dev_ops.png';
import ServiceStorage from 'images/landing/storage_pic.png';
import ServiceOpenShift from 'images/landing/open_shift.png';
import ServiceCompliance from 'images/landing/copliance.png';
import ServiceCode from 'images/landing/code.png';
import ServiceNetworking from 'images/landing/networking.png';
import ServiceMigrator from 'images/landing/migrator.png';
import ServiceArtifactory from 'images/landing/artifactory1.png';

import ComputeImg from 'images/icons/compute-hover.png';
import DiskImg from 'images/icons/disk-hover.png';
import DevOpsImg from 'images/icons/devops-hover.png';
import SrorageImg from 'images/icons/storage-hover.png';
import OpenShiftImg from 'images/icons/openshift-hover.png';
import ComplianceImg from 'images/icons/compliance-car-hover.svg';
import ArtifactoryImg from 'images/icons/artifactory-hover.svg';
import ComputeHvrImg from 'images/icons/compute.png';
import DiskHvrImg from 'images/icons/disk.png';
import ComplianceHvrImg from 'images/icons/compliance-car.png';
import DevOpsHvrImg from 'images/icons/devops.png';
import CodeImg from 'images/icons/code-hover.png';
import CodeHvrImg from 'images/icons/code.png';
import NetworkingImg from 'images/icons/networking-hover.png';
import NetworkingHvrImg from 'images/icons/networking.png';
import MigratorImg from 'images/icons/migrator-hover.png';
import MigratorHvrImg from 'images/icons/migrator.png';
import SrorageHvrImg from 'images/icons/storage.png';
import OpenShiftHvrImg from 'images/icons/openshift.png';
import ArtifactoryHvrImg from 'images/icons/artifactory.svg';

import ArtifactoryNews from 'images/landing/news/artifactory.png';
import ComplianceNews from 'images/landing/news/compliance.png';
import ComputeNews from 'images/landing/news/compute.png';
import DevOpsNews from 'images/landing/news/devops.png';
import DiskNews from 'images/landing/news/disk.png';
import ICDCNews from 'images/landing/news/icdc.png';
import OpenShiftNews from 'images/landing/news/openshift.png';
import StorageNews from 'images/landing/news/storage.png';
import NewCompute from 'images/landing/news/newCompute.png';

export const services = [
  {
    service: 'Compute',
    img: ComputeImg,
    img_hover: ComputeHvrImg,
    imgSrc: ServiceCompute,
    txtClass: 'compute',
    linkTo: '/compute'
  },
  {
    service: 'Disk',
    imgSrc: ServiceDisk,
    img: DiskImg,
    img_hover: DiskHvrImg,
    alt: 'Disk image',
    txtClass: 'disk',
    linkTo: '/disk'
  },
  {
    service: 'Compliance',
    imgSrc: ServiceCompliance,
    img: ComplianceImg,
    img_hover: ComplianceHvrImg,
    txtClass: 'compliance',
    linkTo: '/compliance'
  },
  {
    service: 'DevOps',
    imgSrc: ServiceDevOps,
    img: DevOpsImg,
    img_hover: DevOpsHvrImg,
    txtClass: 'devops',
    linkTo: '/devops'
  },
  {
    service: 'Code',
    imgSrc: ServiceCode,
    img: CodeImg,
    img_hover: CodeHvrImg,
    txtClass: 'code',
    linkTo: '/code'
  },
  {
    service: 'Storage',
    imgSrc: ServiceStorage,
    img: SrorageImg,
    img_hover: SrorageHvrImg,
    txtClass: 'storage',
    linkTo: '/storage'
  },
  {
    service: 'Artifactory',
    imgSrc: ServiceArtifactory,
    img: ArtifactoryImg,
    img_hover: ArtifactoryHvrImg,
    txtClass: 'artifactory',
    linkTo: '/artifactory'
  },
  {
    service: 'OpenShift',
    imgSrc: ServiceOpenShift,
    img: OpenShiftImg,
    img_hover: OpenShiftHvrImg,
    txtClass: 'openshift',
    linkTo: '/openshift'
  },
  {
    service: 'Networking',
    imgSrc: ServiceNetworking,
    img: NetworkingImg,
    img_hover: NetworkingHvrImg,
    txtClass: 'networking',
    linkTo: '/networking'
  },
  {
    service: 'Migrator',
    imgSrc: ServiceMigrator,
    img: MigratorImg,
    img_hover: MigratorHvrImg,
    txtClass: 'migrator',
    linkTo: '/migrator'
  }
]

export const newsImage = [
  ArtifactoryNews, ComplianceNews, ComputeNews, DevOpsNews, DiskNews, ICDCNews, OpenShiftNews, StorageNews, NewCompute
]
