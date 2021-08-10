import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import Mark from 'images/landing/mark.svg';
import { countries } from 'packs/constants/contacts';

let myMap;

const Contact = ({lang}) => {
  const [language, setLang] = useState(localStorage.getItem('language'));
  const [location, setLocation] = useState(countries['cz'].location);
  const [dimension, setDimension] = useState(window.innerWidth);
  const [currentCountry, setCountry] = useState(countries['cz'].name);

  const init = ymaps => {
    myMap = new ymaps.Map("map", {
        center: location,
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    for (const prop in countries) {
      myMap.geoObjects.add(new ymaps.GeoObject({
        geometry: {
            type: "Point",
            coordinates: countries[prop].location
        }
      }));
    }
  }

  const changeLocation = e => {
    const country = e.currentTarget.id;
    setCountry(country);
    setLocation(countries[country].location);
    myMap.panTo(
      countries[country].location, {
        flying: true
      }
    );
  }

  const changeLang = lang => {
    let head = document.getElementsByTagName('head')[0];
    if (myMap) {
      myMap.destroy();
    }
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = 'https://api-maps.yandex.ru/2.1/?onload=init_' + lang + '&lang=' + lang +
        '_RU&ns=ymaps_' + lang;
    head.appendChild(script);
    window['init_' + lang] = function () {
        init(window['ymaps_' + lang]);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    updateWindowDimensions();
    changeLang(language);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
    };
  },[]);

  useEffect(() => {
    if (lang !== language) {
      setLang(lang);
      changeLang(lang);
    }
  },[lang]);

  const updateWindowDimensions = () => {
    setDimension(window.innerWidth);
  }

  const locationInfo = country => {
    const addressClass = ['address']
    if (currentCountry === country.name) {
      addressClass.push('curr');
    }
    return <Row className={addressClass.join(' ')}>
      <div className='text'>
        <Translate value={country.country} className='country' tag='p' />
        <Translate value={country.address} tag='p' dangerousHTML />
      </div>
      <img src={Mark} />
    </Row> 
  }

  const countriesInfo = [];
  for (const prop in countries) {
    const officeInfoClass = ['office_info']
    if (currentCountry === countries[prop].name) {
      officeInfoClass.push('curr');
    }
    countriesInfo.push(
      dimension > 991 ?
      <div key={countries[prop].index} id={countries[prop].name} className={officeInfoClass.join(' ')} onClick={changeLocation}>
        <img src={countries[prop].img} />
        {locationInfo(countries[prop])}
      </div> :
      <a key={countries[prop].index} href={countries[prop].link} className={officeInfoClass.join(' ')} target='_blank'>
        <img src={countries[prop].img} />
        {locationInfo(countries[prop])}
      </a>
    )
  }
  
  return (
    <section id='contact'>
      <Translate value='about.contacts.title' tag='h2' />
      <div className='image_hidden'>
        <Row>
          {countriesInfo}
        </Row>
        <div id="map"></div>    
      </div>
    </section>
  );
}

export default Contact;
