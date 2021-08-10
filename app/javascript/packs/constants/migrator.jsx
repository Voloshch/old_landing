import StorageImg from 'images/landing/services/migrator/storage.png';
import ComputeImg from 'images/landing/services/migrator/compute.png';

export const migratorList = [
  [
    {
      subtitle: 'migrator.benefits.easy.title',
      subdescription: 'migrator.benefits.easy.description'
    },
    {
      subtitle: 'migrator.benefits.automation.title',
      subdescription: 'migrator.benefits.automation.description'
    }
  ],
  [
    {
      subtitle: 'migrator.benefits.control.title',
      subdescription: 'migrator.benefits.control.description'
    },
    {
      subtitle: 'migrator.benefits.saving.title',
      subdescription: 'migrator.benefits.saving.description'
    }
  ],
  [
    {
      subtitle: 'migrator.benefits.agents.title',
      subdescription: 'migrator.benefits.agents.description'
    },
    {
      subtitle: 'migrator.benefits.autoconfiguration.title',
      subdescription: 'migrator.benefits.autoconfiguration.description'
    }
  ]
]

export const stepMigrator = [
  {
    description: 'migrator.howItWorks.workList.addAws'
  },
  {
    description: 'migrator.howItWorks.workList.import'
  },
  {
    description: 'migrator.howItWorks.workList.reconfigure'
  },
  {
    description: 'migrator.howItWorks.workList.resources'
  },
  {
    description: 'migrator.howItWorks.workList.scripts'
  }
]


export const migratorImg = [
  {
    src: StorageImg,
    alt: 'Storage image',
    value: 'migrator.relatedServices.imgName.storage',
    link: 'https://icdc.io/storage'
  },
  {
    src: ComputeImg,
    alt: 'Compute image',
    value: 'migrator.relatedServices.imgName.compute',
    link: 'https://icdc.io/compute'
  }
]