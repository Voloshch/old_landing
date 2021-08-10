import { Translate } from '@davidqhr/react-i18nify';
import React from 'react';

export default function TitledParagraph ({ className, title, tag, description }) {
  const classes = ['block'];
  className === 'benefits' && classes.push('benefits');
  return (
    <div className={classes.join(' ')}>
      <Translate value={title} className={ tag && 'strong_p' } tag={ tag === 'strong_p' ? 'p' : 'h2' } />
      <Translate value={description} tag='p' dangerousHTML />
    </div>
  )
}
