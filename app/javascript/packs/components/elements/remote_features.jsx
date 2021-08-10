import React from 'react';
import Migration from 'images/landing/migration.png';
import Optimization from 'images/landing/optimization.png';
import Reliability from 'images/landing/reliability.png';
import Scalability from 'images/landing/scalability.png'
import { Translate } from '@davidqhr/react-i18nify';

const features = [
  Reliability, Scalability, Optimization, Migration
];

const RemoteFeatures = () => {

  const renderFeatures = features.map((item, key) => (
    <div className='feature' key={key}>
      <img src={item} />
      <div className='text'>
        <Translate value={`remote_work.remote_features.subtitle_${key + 1}`} tag='h2' />
        <Translate value={`remote_work.remote_features.desccription_${key + 1}`} tag='p' />
      </div>
    </div>
  ))

  return (
    <section className='remote_features'>
      <div className='cont'>
        { renderFeatures }
      </div>
    </section>
  )
};

export default RemoteFeatures;