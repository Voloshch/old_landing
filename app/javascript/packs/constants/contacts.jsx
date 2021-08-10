import Usa from 'images/landing/usa.png';
import Blr from 'images/landing/blr.png';
import Blg from 'images/landing/blg.png';
import Cz from 'images/landing/cz.png';

export const countries = {
  'cz': {
    index: 1,
    name: 'cz',
    location: [50.0489401, 14.3578847, 10],
    img: Cz,
    country: 'about.contacts.cz.name',
    address: 'about.contacts.cz.address',
    link: 'https://yandex.by/maps/10511/prague/search/50.0489401%2C%2014.3578847/?ll=14.357971%2C50.049051&sll=14.363448%2C50.049676&source=wizgeo&sspn=0.029376%2C0.011482&utm_medium=maps-desktop&utm_source=serp&z=17'
  },
  'usa': {
    index: 2,
    name: 'usa',
    location: [37.2878586, -121.9352672, 10],
    img: Usa,
    country: 'about.contacts.usa.name',
    address: 'about.contacts.usa.address',
    link: 'https://yandex.by/maps/21756/san-jose/search/37.2878586%2C%20-121.9352672/?ll=-121.923017%2C37.292270&sll=14.357971%2C50.049051&source=wizgeo&sspn=0.014688%2C0.005741&utm_medium=maps-desktop&utm_source=serp&z=14'
  },
  'blr': {
    index: 3,
    name: 'blr',
    location: [53.9270598, 27.6947684, 10],
    img: Blr,
    country: 'about.contacts.blr.name',
    address: 'about.contacts.blr.address',
    link: 'https://yandex.by/maps/157/minsk/search/53.9270598%2C%2027.6947684/?ll=27.694809%2C53.927098&sll=-121.923017%2C37.292270&source=wizgeo&sspn=0.117502%2C0.056985&utm_medium=maps-desktop&utm_source=serp&z=17'
  },
  'bg': {
    index: 4,
    name: 'bg',
    location: [42.491546, 27.476976, 10],
    img: Blg,
    country: 'about.contacts.bg.name',
    address: 'about.contacts.bg.address',
    link: 'https://yandex.by/maps/10380/burgas/search/42.491546%2C%2027.476976/?ll=27.477959%2C42.491560&sll=27.561481%2C53.902496&source=wizgeo&sspn=1.880035%2C0.673930&utm_medium=maps-desktop&utm_source=serp&z=17'
  }
}
