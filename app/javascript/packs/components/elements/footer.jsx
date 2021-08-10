import React, { useState } from 'react';
import { footer } from 'packs/constants/layout';
import { Link } from 'react-router-dom';
import { Translate } from '@davidqhr/react-i18nify';
import ContactUsModal from './contactUsModal';

export default function Footer() {
    const [isVisible, setIsVisible] = useState({
        company: false,
        resources: false,
        services: false
    });

    return (
        <footer>
            <div>
                <div className='top flex container'>
                    <Translate value='title' tag='h2' />
                    <div>
                        <Link to='/configuration'>
                            <button className='btn cloud'>
                            <Translate value='createCloud' />
                            </button>
                        </Link>
                        <ContactUsModal />
                    </div>
                </div>
                <div className='middle flex'>
                    { footer.map((item, index) => (
                        <div key={item.title}>
                            <h6 onClick={() => setIsVisible(prevState => ({ ...prevState, [item.title]: !prevState[item.title] }))}>
                            <Translate value={item.title} />
                            </h6>
                            <div className={(!isVisible[item.title] ? 'hidden' : '') + ' hidden-menu'}>
                            { item.links.map((link) => index === 2 ? <Link key={link.url} to={link.url} className='small-font'>
                                    <Translate value={link.name} />
                                </Link> : <a key={link.url} className='small-font' href={link.url}><Translate value={link.name} /></a>)}
                            </div>
                        </div>
                    ))}
                    <div className='contacts'>
                        <Translate value={'contact'} tag='h6' />
                        <p className='small-font'><Translate value={'phone'} />:  +375(29) 777-00-22</p>
                        <p className='small-font'>E-mail: info@icdc.io</p>
                    </div>
                </div>
                <div className='bottom flex container'>
                    <div className='rights'>
                        <h3>ICDC</h3>
                        <Translate value={'rights'} tag='p' className='small-font' />
                    </div>
                    <div className='policies'>
                        <a href='#' className='small-font'>
                          <Translate value='privacy' />
                        </a>
                        <a href='#' className='small-font'>
                          <Translate value='cookies' />
                        </a>
                        <a href='#' className='small-font'>
                          <Translate value='legal' />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
