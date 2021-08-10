import CodeImage from 'images/landing/services/devops/web-programming.svg';
import InterImage from 'images/landing/services/devops/intersect.png';
import LaptImage from 'images/landing/services/devops/admin.png';

import ObjectStorage from 'images/landing/services/storage/layers.png';
import BlockStorage from 'images/landing/services/storage/objects.svg';
import FileSystem from 'images/landing/services/storage/files.png';

import NetworkingImg from 'images/landing/services/networking/networking-white.png';
import FirewallImg from 'images/landing/services/networking/firewall-white.png';
import RoutingImg from 'images/landing/services/networking/routing-white.png';;

export const practices = [
  {
    src: CodeImage,
    alt: 'Code image',
    value: 'devops.modern_software.old_migrations'
  },
  {
    src: InterImage,
    alt: 'DevOps image',
    value: 'devops.modern_software.ci'
  },
  {
    src: LaptImage,
    alt: 'Laptop image',
    value: 'devops.modern_software.bug_tracking'
  }
]

export const interfaces = [
  {
    src: ObjectStorage,
    alt: 'ObjectStorage image',
    value: 'storage.interfaces.object_storage',
    link: '#object_storage'
  },
  {
    src: BlockStorage,
    alt: 'BlockStorage image',
    value: 'storage.interfaces.block_storage',
    link: '#block_storage'
  },
  {
    src: FileSystem,
    alt: 'FileSystem image',
    value: 'storage.interfaces.file_system',
    link: '#file_system'
  }
]

export const networksImg = [
  {
    src: NetworkingImg,
    alt: 'Networking image',
    value: 'networking.workWithNetworking.imgName.networking'
  },
  {
    src: FirewallImg,
    alt: 'Firewall image',
    value: 'networking.workWithNetworking.imgName.firewall'
  },
  {
    src: RoutingImg,
    alt: 'Routing image',
    value: 'networking.workWithNetworking.imgName.routing'
  }
]
