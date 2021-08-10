import React from 'react';
import { I18n } from '@davidqhr/react-i18nify';
import { languages } from 'packs/constants/languages';

export default class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLang: this.props.lang,
      screenWidth: window.innerWidth
    }
    this.setLang = this.setLang.bind(this); 
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.currentLang !== this.state.currentLang;
  }

  setLang(e) {
    const lang = e.currentTarget.className;
    localStorage.setItem('language', lang);
    I18n.setLocale(lang);
    this.setState({ currentLang: lang }, () => {
      this.props.onLanguageChanged(lang);
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
      this.setState({ screenWidth: window.innerWidth });
  }
  
  render() {
    return (
      <div>
        {languages.map((item, index) => (
          <button key={index} onClick={this.setLang} className={item.short}>{item.full}</button>
        ))}
      </div>
    )
  }
}
