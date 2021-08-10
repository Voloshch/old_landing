import React from 'react';
import { I18n, Translate } from '@davidqhr/react-i18nify';
import { Link } from 'react-router-dom';


export default class InfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.setLanguage = this.setLanguage.bind(this);
    this.state = { lang: I18n._localeKey };
  }

  setLanguage() {
    this.setState({ lang: I18n._localeKey });
  }

  render() {
    return (
      <section id='info_section' >
        <div className='main__content container'>
          <h1>{this.props.title}</h1>
          <Translate value={this.props.description} tag='p' />
          <div className={`flex`}>
            <Link to='/configuration'>
              <button className='btn cloud'>
                <Translate value={'createCloud'} />
              </button>
            </Link>
            <a href={  this.props.documentationLink + this.state.lang + '/Welcome.html' } target='_blank' onMouseDown={this.setLanguage} >
                <button className='btn black'><Translate value='menu.about.documentation' /></button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
