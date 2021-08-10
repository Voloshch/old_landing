import React from 'react';
import Remote from 'images/landing/remote.png';
import { Translate } from '@davidqhr/react-i18nify';

const HowItWorks = () => {
  return (
    <section className='now_it_works'>
      <div className='cont'>
        <div className='info'>
          <Translate value='remote_work.how_it_works.title' tag='h1' />
          <Translate value='remote_work.how_it_works.description' tag='div' dangerousHTML />

          {
            new Array(4).fill('_').map((_, key) => (
              <div key={key} className='article'>
                <div className='square' />
                <Translate key={key} value={`remote_work.how_it_works.article_${key + 1}`} tag='p' />
              </div>
            ))
          }
        </div>

        <div className='img_container'>
          <img src={Remote} />
        </div>
      </div>
    </section>
  )
};

export default HowItWorks;
