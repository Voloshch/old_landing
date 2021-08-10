import React, { useState, useEffect } from 'react';
import { Translate } from '@davidqhr/react-i18nify';
import EmailForm from './email_form';

const RemoteRequest = ( lang ) => {
  const [language, setLang] = useState(localStorage.getItem('language'));

  useEffect(() => {
    if (lang !== language) {
      setLang(lang);
    }
  },[lang]);

  return (
    <section className='remote_request'>
      <div className='cont'>
        <div className='remote_info'>
          <Translate value='remote_work.remote_request.title' tag='h2' />
          {
            new Array(4).fill('_').map((_, key) => (
              <div key={key} className='article'>
                <div className='square' />
                <Translate key={key} value={`remote_work.remote_request.article_${key + 1}`} tag='p'/>
              </div>
            ))
          }
        </div>

        <div className='form'>
          <Translate value='remote_work.remote_request.request' tag='h2' />
          <EmailForm name='remote' />
        </div>
      </div>
    </section>
  )
};

export default RemoteRequest;