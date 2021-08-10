export const services = [
    { name: 'Compute', url: '/compute' },
    { name: 'Networking', url: '/networking' },
    { name: 'Code', url: '/code' },
    { name: 'Artifactory', url: '/artifactory' },
    { name: 'Projects', url: '/projects' },
    { name: 'OpenShift', url: '/openshift' },
    { name: 'DevOps', url: '/devops' },
    { name: 'Compliance', url: '/compliance' },
    { name: 'Storage', url: '/storage' },
    { name: 'Disk', url: '/disk' },
    { name: 'Migrator', url: '/migrator' }
];

export const resources = [
    { name: 'help', url: 'https://help.icdc.io' },
    { name: 'portal', url: 'https://customerportal.icdc.io/' },
    { name: 'specification', url: '/model2020' }
];

export const aboutUs = [
    { name: 'icdc', url: '/about' },
    { name: 'ourTeam', url: '/team' },
    { name: 'ourCustomers', url: '/customers' }
];

export const footer = [
    {
        title: 'company',
        links: [
            {
                name: 'icdc',
                url: '/icdc'
            },
            {
                name: 'news',
                url: '/news'
            },
            {
                name: 'ourTeam',
                url: '/team',
            },
            {
                name: 'ourCustomers',
                url: '/customers'
            }
        ]
    },
    {
        title: 'resources',
        links: [
            {
                name: 'help',
                url: 'help.icdc.io'
            },
            {
                name: 'pricing',
                url: '/pricing'
            },
            {
                name: 'specification',
                url: '/specification',
            },
            {
                name: 'portal',
                url: '/portal'
            }
        ]
    },
    {
        title: 'services',
        links: services
    }
];
