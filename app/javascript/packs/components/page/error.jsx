import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Button } from 'reactstrap';
import img404 from 'images/landing/error-404.svg';
import { Translate } from '@davidqhr/react-i18nify';

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div className='error_page'>
        <div id='picture'>
          <img src={img404} alt=''/>
        </div>

        <Container>
          <Translate value='page404.title' tag='p' />

          <div className='button'>
            <Link to='/'>
              <Button>
                <Translate value='page404.back' dangerousHTML />
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}
