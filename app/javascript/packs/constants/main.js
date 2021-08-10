import Money from 'images/landing/money.svg';
import Business from 'images/landing/business.svg';
import Hardware from 'images/landing/hardware.svg';
import Nopay from 'images/landing/nopay.svg';
import Ready from 'images/landing/ready.svg';
import Start from 'images/landing/start.svg';

import Prjects from 'images/landing/home/projects.png';
import ProjectsMob from 'images/landing/home/projectsMob.png';
import Compute from 'images/landing/home/compute.png';
import ComputeMob from 'images/landing/home/computeMob.png';
import Compliance from 'images/landing/home/compliance.png';
import ComplianceMob from 'images/landing/home/complianceMob.png';
import Networking from 'images/landing/home/networking.png';
import NetworkingMob from 'images/landing/home/networkingMob.png';

export const features = [
    {
        img: Money,
        title: 'moneyTitle',
        description: 'moneyDescription'
    },
    {
        img: Ready,
        title: 'readyTitle',
        description: 'readyDescription'
    },
    {
        img: Start,
        title: 'startTitle',
        description: 'startDescription'
    },
    {
        img: Hardware,
        title: 'hardwareTitle',
        description: 'hardwareDescription'
    },
    {
        img: Business,
        title: 'businessTitle',
        description: 'businessDescription'
    },
    {
        img: Nopay,
        title: 'nopayTitle',
        description: 'nopayDescription'
    }
];

export const opportunities = [
    {
        title: 'stabilityTitle',
        description: 'stabilityDescription'
    },
    {
        title: 'kubernetesTitle',
        description: 'kubernetesDescription'
    },
    {
        title: 'vpcTitle',
        description: 'vpcDescription'
    },
    {
        title: 'aiTitle',
        description: 'aiDescription'
    }
];

export const sliderItems = [
    {
        img: Prjects,
        imgMob: ProjectsMob,
        link: '/projects',
        title: 'ICDC Projects',
        desctiption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus fringilla volutpat vitae scelerisque ullamcorper platea. In posuere elementum morbi at amet eu orci in nisi. Ornare nec pharetra rutrum euismod pellentesque ornare ornare quis. Ligula facilisis at ut risus. Diam nulla ipsum quam at sed.'
    },
    {
        img: Compute,
        imgMob: ComputeMob,
        link: '/compute',
        title: 'ICDC Compute',
        desctiption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus fringilla volutpat vitae scelerisque ullamcorper platea. In posuere elementum morbi at amet eu orci in nisi. Ornare nec pharetra rutrum euismod pellentesque ornare ornare quis. Ligula facilisis at ut risus. Diam nulla ipsum quam at sed.'
    },
    {
        img: Networking,
        imgMob: NetworkingMob,
        link: '/networking',
        title: 'ICDC Networking',
        desctiption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus fringilla volutpat vitae scelerisque ullamcorper platea. In posuere elementum morbi at amet eu orci in nisi. Ornare nec pharetra rutrum euismod pellentesque ornare ornare quis. Ligula facilisis at ut risus. Diam nulla ipsum quam at sed.'
    },
    {
        img: Compliance,
        imgMob: ComplianceMob,
        link: '/compliance',
        title: 'ICDC Compliance',
        desctiption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus fringilla volutpat vitae scelerisque ullamcorper platea. In posuere elementum morbi at amet eu orci in nisi. Ornare nec pharetra rutrum euismod pellentesque ornare ornare quis. Ligula facilisis at ut risus. Diam nulla ipsum quam at sed.'
    },
];

export const infrastructure = [
    {
        title: 'infrastructureTitle',
        points: [
            'provisioning',
            'advancedTools',
            'management',
            'awsMigration'
        ]
    },
    {
        title: 'highAvailabilityTitle',
        points: [
            'replicate',
            'loadBalancing',
            'backups',
            'autonomousClouds'
        ]
    }
];
