import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo () {
  return (
    <div id='logo-component'>
      <Link to='/'>
        <div id='logo'></div>
      </Link>
    </div>
  );
}
