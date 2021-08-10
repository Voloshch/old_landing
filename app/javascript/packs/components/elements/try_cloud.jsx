import React from 'react';
import { Container, Row } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import EmailForm from './email_form';
import Laptop from 'images/landing/form-laptop.png';

export default class AboutServices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='try-cloud-section'>
        <Container>
          <Translate value='home.try_cloud.title' tag='h2' />
          <Translate value='home.try_cloud.description' tag='p' />
          
          <Row>
            <img src={Laptop} />
            <EmailForm name='try_cloud' />
          </Row>
        </Container>
      </section>
    );
  }
}
