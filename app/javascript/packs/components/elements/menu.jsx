import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './dropdown';
import ContactUsModal from './contactUsModal';
import { services, resources, aboutUs } from 'packs/constants/layout';
import Burger from 'images/icons/burger.svg';
import Close from 'images/icons/close.svg';
import { Translate, I18n } from '@davidqhr/react-i18nify';

export default function Menu({ onLanguageChanged }) {
    const [isExpand, setIsExpand] = useState(false);
    const [lang, setLang] = useState(I18n._localeKey);
    const Icon = isExpand ? Close : Burger;

    useEffect(() => {
      I18n.setLocale(lang);
      localStorage.setItem('language', lang);
      if (onLanguageChanged) {
        onLanguageChanged(lang);
      }
    }, [lang]);

    return (
        <header className='header container'>
            <Link to='/' className='header__cloud-link'>
              ICDC
            </Link>
            <div className={(isExpand ? '' : 'hidden') + ' menu'}>
                <nav className='header__nav'>
                    <Dropdown title={'services'} items={services} />
                    <Dropdown title={'resources'} items={resources} />
                    <Link to='/pricing'>
                      <Translate value={'pricing'}/>
                    </Link>
                    <Dropdown title={'aboutUs'} items={aboutUs} />
                    <ContactUsModal isHeader />
                </nav>

                <ul className='dropdown'>
                    <li className='lang'>
                        <div onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} />
                        <a className='title'>{lang === 'ru' ? 'Русский' : 'English'}</a>
                        <div className='right' onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')} />
                        <ul>
                          <a onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}>
                            {lang === 'ru' ? 'Английский' : 'Russian'}
                          </a>
                        </ul>
                    </li>
                </ul>
            </div>
            <Link to='/configuration'>
                <button className='btn cloud'>
                  <Translate value={'createCloud'}/>
                </button>
            </Link>
            <img src={Icon} className='icon' onClick={() => setIsExpand(prevState => !prevState)} />
        </header>
    );
};
