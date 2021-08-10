import React from 'react';
import { Translate } from '@davidqhr/react-i18nify';
import { HashLink as Link } from 'react-router-hash-link';

export default class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      mobVisible: false,
      screenWidth: window.innerWidth
    }
  }

  hover = () => {
    if (!this.state.isVisible && this.state.screenWidth > 1199) {
      this.setState({isVisible: true});
    }
  }

  leave = () => {
    if (this.state.isVisible && this.state.screenWidth > 1199) {
      this.setState({isVisible: false});
    }
  }

  click = () => {
    if (this.state.screenWidth <= 1199) {
      this.setState({mobVisible: !this.state.mobVisible});
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isVisible !== this.state.isVisible || nextState.screenWidth !== this.state.screenWidth || nextState.mobVisible !== this.state.mobVisible;
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
    if (window.innerWidth > 1199) {
      this.setState({mobVisible: false});
    }
  }

  render() {
    const { className, options, title } = this.props;
    const { isVisible, mobVisible } = this.state;
    const selectStyle = ['select', className], buttonStyle = ['main', className], optionsStyle = ['options', className];
    if (isVisible || mobVisible) {
      buttonStyle.push('visible');
    } else {
      optionsStyle.push('hidden');
    }
    return (
      <div className={ selectStyle.join(' ') } onMouseOver={this.hover} onMouseOut={this.leave}>
        <button onClick={this.click} className={ buttonStyle.join(' ') }>
          <Translate value={ title }/>
        </button>
        <div className={ optionsStyle.join(' ') }>
          {options.filter(item => !item.isHidden).map((item, index) => (
            item.isNewWindow ? 
            <a key={index} href={item.linkTo}  target='_blank'>
              <button><Translate value={item.service}/></button>
            </a> 
            :
            <Link key={index} to={item.linkTo}>
              <button><Translate value={item.service}/></button>
            </Link>
          ))}
        </div>
      </div>
    )
  }
}
