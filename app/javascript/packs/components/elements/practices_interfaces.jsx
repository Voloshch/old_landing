import React from 'react';
import { Translate } from '@davidqhr/react-i18nify';
import { Row } from 'reactstrap';
import { HashLink } from 'react-router-hash-link';
import { Col } from 'react-flexbox-grid';

export default class PracticesInterfaces extends React.Component {

  render() {
    const LinkOrCol = this.props.className === 'storage' ? HashLink : Col;
    const list = this.props.array.map((item, key) => (
      <div key={key} className={ 'cont ' + this.props.className}>
        <LinkOrCol to={item.link}>
          <div className='practice_block'>
            <img src={item.src} alt={item.alt} />
            <Translate value={item.value} tag='p' />
          </div>
        </LinkOrCol> 
      </div>
    ));
    return (
      <section className='change_practice'>
        <Translate value={this.props.value} tag='h2' />
        <Row>
          {list}
        </Row>
      </section>
    )
  }
}
