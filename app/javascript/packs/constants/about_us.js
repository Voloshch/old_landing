export const aboutUs = [
  {
    title: 'about.we_provide.title',
    description: 'about.we_provide.description',
    src: '/about/cloud.png',
    alt: 'Cloud illustration'
  },
  {
    title: 'about.quality.title',
    description: 'about.quality.description',
    src: '/about/quality.png',
    alt: 'Quality illustration',
  },
  {
    title: 'about.mission.title',
    description: 'about.mission.description',
    src: '/about/arms.png',
    alt:'Arms illustration',
    reflection: true
  },
  {
    title: 'about.vision.title',
    description: 'about.vision.description',
    src: '/about/concept.png',
    alt: 'Quality illustration',
    reflection: true
  }
];

export const about = lang => {
  return [
    { service: 'menu.about.about_us',
      linkTo: '/about' 
    },
    { service: 'menu.about.news',
      linkTo: '/#news'
    },
    { service: 'menu.about.team',
      linkTo: '/team'
    },
    { service: 'menu.customers',
      linkTo: '/customers',
      isHidden: true
    },
    { service: 'menu.about.documentation',
      linkTo: 'https://help.icdc.io/' + (lang === 'de' ? 'en' : lang),
      isNewWindow: true
    },
    { service: 'menu.about.legal',
      linkTo: `/legal/${lang}`,
      isNewWindow: true
    },
  ]
};
