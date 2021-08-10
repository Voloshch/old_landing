import React from 'react';
import { I18n } from '@davidqhr/react-i18nify';
import { languages } from 'packs/constants/languages';

export default class SelectLang extends React.Component {
  constructor() {
    super();
    let lang = localStorage.getItem('language');
    this.state = {
      isVisible: false,
      currentLang: lang || ''
    }
  }

  hover = () => {
    if (!this.state.isVisible) {
      this.setState({isVisible: true});
    }
  }

  leave = () => {
    if (this.state.isVisible) {
      this.setState({isVisible: false});
    }
  }

  componentDidMount() {
    if (I18n._localeKey == 'en') {
      this.setState({
        currentLang: 'en'
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.lang !== prevProps.lang) {
      this.setState({currentLang: this.props.lang});
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isVisible !== this.state.isVisible || nextState.currentLang !== this.state.currentLang || nextProps.lang !== this.props.lang;
  }

  handler = language => {
    if (this.props.onLanguageChanged) {
      this.setState({ currentLang: language });
      this.props.onLanguageChanged(language);
    }
  }

  setLang = e => {
    const lang = e.currentTarget.className;
    localStorage.setItem('language', lang);
    I18n.setLocale(lang);
    if (this.state.currentLang !== lang) {
      this.setState({ currentLang: lang }, () => {
        this.props.onLanguageChanged(lang);
      });
    }
  }

  render() {
    let main;
    languages.forEach((lang) => {
      if (this.state.currentLang === lang.short) {
        main = <button className={ (this.state.isVisible ? 'visible ' : '') + 'main lang' }>{lang.full}</button>;
      }
    });
    return (
      <div className='select lang' onMouseOver={this.hover} onMouseOut={this.leave}>
        { main }
        <div className={ (this.state.isVisible ? '' : 'hidden ') + 'options lang'}>
          {languages.map((item, index) => (
            <button key={index} onClick={this.setLang} className={item.short}>{item.full}</button>
          ))}
        </div>
      </div>
    )
  }
}
