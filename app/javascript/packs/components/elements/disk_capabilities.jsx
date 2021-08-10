import React from 'react'
import { Container } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';

const capabilities = [
  {
    text: 'disk.main_features.store_files',
    number: '01. '
  },
  {
    text: 'disk.main_features.files_moving',
    number: '02. '
  },
  {
    text: 'disk.main_features.securely_storage',
    number: '03. '
  },
  {
    text: 'disk.main_features.guarantees',
    number: '04. '
  },
  {
    text: 'disk.main_features.technical_support',
    number: '05. '
  },
  {
    text: 'disk.main_features.files_commenting',
    number: '06. '
  },
  {
    text: 'disk.main_features.text_search',
    number: '07. '
  },
  {
    text: 'disk.main_features.create_files',
    number: '08. '
  }
]

export default class DiskCapabilities extends React.Component {
  render() {
    const ability = capabilities.map((item, key) =>
      <p key={key}>
        <span className='number'>
          {item.number}
        </span>
        <Translate value={item.text} />
      </p>
    );
    return (
      <section className='disk_capabilities'>
        <Container>
          <Translate value='disk.main_features.title' tag='h2' />
          <div className='line' />
          <div className='column'>
            {ability}
          </div>
        </Container>
      </section>
    )
  }
}
