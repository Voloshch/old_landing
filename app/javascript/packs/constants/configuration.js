export const steps = ['min', 'mid', 'max', 'custom'];

export const services = [
    {
        title: 'Compute',
        description: 'computeDescription',
        isMain: true,
        options: [
            {
                title: 'computeNode',
                values: ['3', '5', '7']
            },
            {
                title: 'computeCpu',
                values: ['3', '5', '7']
            },
            {
                title: 'computeMemory',
                values: ['3', '5', '7']
            },
            {
                title: 'computeStorageType',
                values: ['3', '5', '7']
            },
            {
                title: 'storageSize',
                values: ['3', '5', '7']
            },
            {
                title: 'gpu',
                values: ['3', '5', '7']
            }
        ]
    },
    {
        title: 'Networking',
        description: 'networkingDescription',
        isMain: true,
        options: [
            {
                title: 'networkingIsAnonymus'
            },
            {
                title: 'networkingIpv4',
                values: ['3', '5', '7']
            },
            {
                title: 'networkingBandwidth',
                values: ['3', '5', '7']
            }
        ]
    },
    {
        add: 'addServices',
        title: 'Storage',
        description: 'storageDescription',
        isMain: false,
        options: [
            {
                title: 'storageNode',
                values: ['3', '5', '7']
            },
            {
                title: 'storageSsd',
                values: ['3', '5', '7']
            },
            {
                title: 'storageHdd',
                values: ['3', '5', '7']
            }
        ]
    },
    {
        title: 'Code',
        description: 'codeDescription',
        isMain: false,
        options: [
            {
                title: 'storageSize',
                values: ['3', '5', '7']
            }
        ]
    },
    {
        title: 'Disk',
        description: 'diskDescription',
        isMain: false,
        options: [
            {
                title: 'storageSize',
                values: ['3', '5', '7']
            }
        ]
    },
    {
        title: 'Artifactory',
        description: 'artifactoryDescription',
        isMain: false,
        options: [
            {
                title: 'storageSize',
                values: ['3', '5', '7']
            }
        ]
    },
    {
        title: 'OpenShift',
        description: 'openshiftDescription',
        isMain: false,
        options: [
            {
                title: 'openshiftNodes',
                values: ['3', '5', '7']
            },
            {
                title: 'openshiftCpu',
                values: ['3', '5', '7']
            },
            {
                title: 'openshiftRam',
                values: ['3', '5', '7']
            },
            {
                title: 'openshiftDisk',
                values: ['3', '5', '7']
            }
        ]
    }
];
