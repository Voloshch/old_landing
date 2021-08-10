import React from 'react';

export default class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0,
        isHidden: true
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateHidden);
  }

  updateHidden = () => {
    this.setState({isHidden: window.innerHeight - 100 > window.pageYOffset});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateHidden);
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
    const scroll_class = ['scroll'];
    this.state.isHidden && scroll_class.push('hidden');
    return (
       <div id='scroll_button'> 
          <div className={scroll_class.join(' ')} onClick={ () => { this.scrollToTop(); }}></div>
      </div>      
    );   
  }
} 
