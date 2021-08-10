import NetworkingImg from 'images/landing/services/networking/networking-white.png';
import FirewallImg from 'images/landing/services/networking/firewall-white.png';
import RoutingImg from 'images/landing/services/networking/routing-white.png';

export const networkingList = [
  [
    {
      subtitle: 'networking.benefits.fastAndEasy.title',
      subdescription: 'networking.benefits.fastAndEasy.description'
    },
    {
      subtitle: 'networking.benefits.control.title',
      subdescription: 'networking.benefits.control.description'
    }
  ],
  [
    {
      subtitle: 'networking.benefits.safety.title',
      subdescription: 'networking.benefits.safety.description'
    },
    {
      subtitle: 'networking.benefits.setting.title',
      subdescription: 'networking.benefits.setting.description'
    }
  ],
  [
    {
      subtitle: 'networking.benefits.scalability.title',
      subdescription: 'networking.benefits.scalability.description'
    },
    {
      subtitle: 'networking.benefits.nonStopWork.title',
      subdescription: 'networking.benefits.nonStopWork.description'
    }
  ]
]

export const toDoNetworkingList = [
	[
		{
			subtitle: 'networking.toDoNetworking.vpcNetworks.title',
			subdescription: 'networking.toDoNetworking.vpcNetworks.description',
			imgClass: 'networking',
		},
	],
	[
		{
			subtitle: 'networking.toDoNetworking.vpcRouting.title',
			subdescription: 'networking.toDoNetworking.vpcRouting.description',
			imgClass: 'route',
		},
	],
	[
		{
			subtitle: 'networking.toDoNetworking.vpcFirewall.title',
      subdescription: 'networking.toDoNetworking.vpcFirewall.description',
      subdescriptionSecond: 'networking.toDoNetworking.vpcFirewall.descriptionSecond',
			imgClass: 'firewall',
		},
	],
];


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
