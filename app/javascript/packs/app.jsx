import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from 'packs/routes/app_router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faUser, faEnvelope, faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import 'packs/constants/translations';

library.add(faBars, faUser, faEnvelope, faAngleRight, faAngleDown)

class App extends React.Component {
  render() {
    return(
      <div>
        <AppRouter />
      </div>
    );
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <App />,
    document.getElementById('app'),
  )
})
