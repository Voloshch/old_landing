import React from 'react';
import { Translate } from '@davidqhr/react-i18nify';

const Service = ({ text, images_array }) => {
  const images = images_array.map((image, key) => (
    <img key={key} src={image} />
  ));
  return (
    <div className='service'>
      <Translate value={text} dangerousHTML tag='p'/>
      <div className='img_container'>
        {images}
      </div>
    </div>
  )
}

export default Service;
