import React from 'react';
import Link from 'images/icons/link.svg';
import { Translate } from '@davidqhr/react-i18nify';
import qs from 'qs';
import xss from 'xss';
import format from 'date-fns/format'
import ru from  'date-fns/locale/ru/index.js'
import en from  'date-fns/locale/en-US/index.js'

export default class Newss extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentNews: null,
      isLoad: false,
      response: [],
      mobNews: 0,
      startX: null,
      startY: null,
      startTime: null,
      lang: localStorage.getItem('language')
    }
    this.onClick=this.onClick.bind(this);
    this.onReturn=this.onReturn.bind(this);
    this.onTouchStart=this.onTouchStart.bind(this);
    this.onTouchEnd=this.onTouchEnd.bind(this);
    this.swipe = this.swipe.bind(this);
  }
  componentDidMount(){
    fetch('/articles?' + qs.stringify({limit: 5}))
    .then((response) => {
      response.json()
        .then((data) => {
          this.setState({response: data, isLoad: true});
        })
    })
  }

  formatDate = (date, formatStyle, locale) => {
    return format(date, formatStyle, {
      locale: locale === 'ru' ? ru : en
    })
  }

  onClick(e) {
    this.setState({currentNews: Number(e.currentTarget.id)});
  }

  onReturn() {
    this.setState({currentNews: null});
  }

  returnDate = (date) => {
    let data = new Date(date.substr(0,4), date.substr(5,2)-1, date.substr(8,2))
    return this.formatDate(data, localStorage.getItem('language') === 'ru' ? 'd MMMM, yyyy' : 'MMMM d, yyyy', localStorage.getItem('language'));
  }

  onTouchStart(e) {
    const obj = e.changedTouches[0];
    this.setState({startX: obj.pageX, startY: obj.pageY, startTime: new Date().getTime()});
  }

  changeItem(action) {
    if (action === 'front') {
      this.setState(prevState => ({mobNews: prevState.mobNews === 5 ? 0 : prevState.mobNews + 1}));
    } else {
      this.setState(prevState => ({mobNews: prevState.mobNews === 0 ? 5 : prevState.mobNews - 1}));
    }
  }

  setSliderStyles(){

    const transition = this.state.mobNews * - 325;
    
    return {
      width: ( 6 * 325 ) + 'px',
      transform: 'translateX(' + transition + 'px)'
    }
  }

  onTouchEnd(e) {
    const touchobj = e.changedTouches[0];
    const dist = touchobj.pageX - this.state.startX;
    const elapsedTime = new Date().getTime() - this.state.startTime;
    const swiper = (elapsedTime <= 400 && Math.abs(dist) >= 50 && Math.abs(touchobj.pageY - this.state.startY) <= 300);
    if (swiper && dist > 0) {
      this.changeItem('back');
    }
    if (swiper && dist < 0) {
      this.changeItem('front');
    }
  }

  swipe(e) {
    if (e.target.id === 'right') {
      this.changeItem('front');
    } else {
      this.changeItem('back');
    }
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.lang !== this.props.lang ) {
      this.setState({lang: this.props.lang});
    }
  }

  mobNewsBlock(){
    const langPref = this.state.lang === 'ru' ? '' : 'eng_';
    let mob;
    if (this.state.response.length !== 0 && this.state.isLoad) {
      mob = this.state.response.map((news, newsNumber) => (
        <div key={newsNumber} id={newsNumber} onClick={this.onClick} className={(newsNumber === 0 ? 'first ' : '') + 'item'}>
          <div className='img_block'>
            <img src={news.image_src} />
          </div>
          <div className='news_info'>
              <p className='date'>{this.returnDate(news.created_at)}</p>
              <h2>{news[langPref + 'title']}</h2>
              <div className='description' dangerouslySetInnerHTML={{__html: xss(news[langPref + 'text'])}} />
              <div className='news_link all'>
                <img className='link_img reverse' src={Link} />
                <Translate className='find_out' value="home.news.find_out" tag='p' />
              </div>
            <div className='transparent_block'></div>
          </div>
        </div>
      ));
      mob.push(                    
        <div  key='5' id='5' className='item facebook'>
          <a href='https://ibagroup.facebook.com/groups/345127779314709/' target='_blank'>
            <div>
              <p>Посмотреть все новости на Facebook</p>
            </div>
          </a>
        </div>
      )
    }
    return mob;
  }

  dots(index){
    this.setState({
        mobNews: index
    });
  }

  isActive(value){
    if(this.state.mobNews === value){
        return 'active';
    }
  }

  render() {
    const {response, currentNews, lang} = this.state, langPref = lang === 'ru' ? '' : 'eng_';
    const currentNewsClasses = ['news_block'], mobNewsBlockClasses = ['mob'], currentNewsBlockClasses = ['about_news'], dotsClasses = ['dots_container'];
    if (currentNews !== null) {
      currentNewsClasses.push('hidden');
      mobNewsBlockClasses.push('hidden');
      dotsClasses.push('hidden');
    } else {
      currentNewsBlockClasses.push('hidden');
    }
    const news = response.length !== 0 && response.map((news, newsNumber) => (
      <div id={newsNumber} key={newsNumber} onClick={this.onClick} className='item'>
        <div className='img_block'>
          <img src={news.image_src} />
        </div>
        <div className='news_info'>
          <p className='date'>{this.returnDate(news.created_at)}</p>
            <h2>{news[langPref + 'title']}</h2>
            <div className='description' dangerouslySetInnerHTML={{__html: xss(news[langPref + 'text'])}} />
            <div className='news_link all'>
              <img className='link_img reverse' src={Link} />
              <Translate className='find_out' value="home.news.find_out" tag='p' />
            </div>
            <div className='transparent_block'></div>
        </div>
      </div>
    ));

    const currentNewsBlock = response.length !== 0 && currentNews !== null &&
      <div className='news_container'>
        <p className='date'>{this.returnDate(response[currentNews].created_at)}</p>
        <h2>{response[currentNews][langPref + 'title']}</h2>
        <div className='description' dangerouslySetInnerHTML={{__html: xss(response[currentNews][langPref + 'text'])}} />
      </div>;

    const renderDots = response.length !== 0 && this.mobNewsBlock().map( (card, dotsNumber) => (
        <li 
          className={this.isActive(dotsNumber) + ' dots' }   
          key={ dotsNumber } 
          onClick={ this.dots.bind(this, dotsNumber) } >
          <a>&#9679;</a>
        </li> 
      ));

    return (
      <section id='news'>
        <div className='news_row'>
          <Translate className='news_title' value="home.news.latest_news" tag='h1' dangerousHTML />

          <div className={currentNewsClasses.join(' ')}>
            {news}
            
            <a href='https://ibagroup.facebook.com/groups/345127779314709/' target='_blank'>
              <div className='item facebook'>
                <Translate className='find_out' value="home.news.see_all" tag='p' />
              </div>
            </a>
          </div> 

          <div className={mobNewsBlockClasses.join(' ')} onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
              <div className='slider_block'>
                <div className='slider'>
                  <div className='wrapper' style={ this.setSliderStyles() }>
                    { this.mobNewsBlock() }
                  </div>
                </div>
              </div>
          </div>

          <ul className={dotsClasses.join(' ')}>
            { renderDots }
          </ul>

          <div className={currentNewsBlockClasses.join(' ')}>
            {currentNewsBlock}
            <br />

            <div className='news_link' onClick={this.onReturn}>
              <img className='link_img' src={Link} />
              <Translate className='find_out' value="home.news.back" tag='p' />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
