import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from '@davidqhr/react-i18nify';

export default function Dropdown({ title, items }) {
  const [isExpand, setIsExpand] = useState(false);

  console.log(items)

  const dropdownItems = items.map(item => item.url ? 
    item.url.includes('http') ? <a key={item.name} href={item.url} target='_blank'>
      <Translate value={item.name} />
    </a> :
    <Link key={item.name} to={item.url}>
      <Translate value={item.name} />
    </Link> :
    <li key={item.name}><Translate value={item.name}/></li>);

  return (
    <ul className='dropdown'>
      <li>
        <a className='title' onClick={() => setIsExpand(prevState => !prevState)}><Translate value={title}/></a>
        <ul className={isExpand ? 'visible' : ''}>
          { dropdownItems }
        </ul>
      </li>
    </ul>
  );
};
