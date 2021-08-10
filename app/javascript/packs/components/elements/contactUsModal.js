import React, { useState } from 'react';
import { Translate, I18n } from '@davidqhr/react-i18nify';

export default function ContactUsModal({ isHeader }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = (e) => {
    e.preventDefault()
    setIsOpen(false);
  };

  return (
    <React.Fragment>
      { isHeader ? <a className='modal-button' onClick={() => setIsOpen(true)}>
        <Translate value={'contactUs'}/>
      </a> :<button onClick={() => setIsOpen(true)} className='btn black'>
        <Translate value='contactUs' />
      </button> }
      { isOpen && <React.Fragment>
        <div className="modal">
          <h2>{<Translate value={'contactUs'}/>}</h2>
          <div>
            <input placeholder={I18n.t('contact_us.name')} />
            <input placeholder={I18n.t('contact_us.email')} />
            <input placeholder={I18n.t('contact_us.phonePlaceholder')} />
            <input placeholder={I18n.t('contact_us.message')} />
          </div>
          <button className='btn cloud'><Translate value={'contact_us.send'}/></button>
        </div>
        <div className="bg" onClick={e => close(e)}/>
      </React.Fragment> }
    </React.Fragment>
  );
};
