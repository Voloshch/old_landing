import React, { useState } from 'react';
import Menu from 'packs/components/elements/menu';
import Footer from 'packs/components/elements/footer';
import ScrollButton from 'packs/components/elements/scroll_button';
import { features, opportunities, sliderItems, infrastructure } from 'packs/constants/main';
import Arrow from 'images/landing/arrow.svg';
import Main from 'images/landing/main.png';
import Services from 'images/landing/services.png'
import { Link } from 'react-router-dom';
import { Translate, I18n } from '@davidqhr/react-i18nify';

export default function Home() {
  const [lang, setLang] = useState(I18n._localeKey);
  const [currentSlide, setCurrentSlide] = useState(0);

  const steps = new Array(4).fill('');

  const items = sliderItems.map((item, key) => (
    <div key={key} className='slide'>
        <div className='slide__content'>
          <h2>{item.title}</h2>
          <Link to={item.link}>
            <button className='btn'>
              <Translate value={'learnMore'} />
            </button>
          </Link>
        </div>
        <img className='desktop' src={item.img} />
        <img className='mobile' src={item.imgMob} />
    </div>
  ));

  const moveSlider = (direction) => {
    setCurrentSlide(prevState => direction === 'back' ? prevState === 0 ? 3 : prevState - 1 : prevState === 3 ? 0 : prevState + 1);
  };

  return (
    <React.Fragment>
      <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
      <Menu onLanguageChanged={lang => setLang(lang)}/>
      <main className='home'>
        <section className='main'>
          <img src={Main} alt='Vercel Logo' className='main__img' />
          <div className='main__content container'>
            <Translate value={'mainTitle'} tag='h1' />
            <Translate value={'description'} tag='h5' />
            <div className={`flex ${lang}`}>
              <Link to='/configuration'>
                <button className='btn cloud'>
                  <Translate value={'createCloud'} />
                </button>
              </Link>
              <button className='btn black'>
                <Translate value={'contactUs'} />
              </button>
            </div>
          </div>
        </section>

        <section className='features container flex'>
          <div className='main-part'>
            <Translate value={'bestFeatures'} tag='h2' />
            <Translate value={'ourMission'} tag='p' />
            <Link to='/about'>
              <button className='btn cloud'>
                <Translate value={'aboutUs'} />
              </button>
            </Link>
          </div>
          <div className='features__description'>
            { features.map((feature, key) => <div key={key} className='features__item'>
              <img src={feature.img} />
              <Translate value={feature.title} tag='h6' />
              <Translate className='normal' value={feature.description} tag='h6' />
            </div>)}
          </div>
        </section>

        <section className='services container'>
          <div className='services__content flex'>
            <Translate value={'growServices'} tag='h2' />
            <Translate value={'deployPlatform'} tag='p' />
            <button className='btn cloud'>
              <Translate value={'learnMore'} />
            </button>
          </div>
          <img src={Services} />
        </section>

        <section className='interface'>
          <div className='interface__title'>
            <Translate value={'interface'} tag='h4' />
          </div>
          <div className='slider'>
            <img src={Arrow} className='arrow' onClick={() => moveSlider('back')} />
            <div className='slider__content' style={{ transform: 'translateX(calc(-' + currentSlide * 100 + 'vw + ' + 15 * currentSlide + 'px)' }}>
              { items }
            </div>
            <img src={Arrow} className='arrow revert' onClick={() => moveSlider('forward')} />
          </div>
          <div className='opportunities'>
            { opportunities.map((opportunity, key) => <div key={key} className='item'>
              <Translate value={opportunity.title} tag='h5' />
              <Translate value={opportunity.description} tag='p' />
            </div>) }
          </div>
        </section>

        <section className='howitworks'>
          <Translate value={'howItWorks'} tag='h2' />
          <div className='steps'>
            { steps.map((_, key) => (
              <div key={key} className='step'>
                <div className='circle'>{key + 1}</div>
                <Translate value={`step${key + 1}`} tag='p' />
              </div>)
            )}
          </div>
          <Link to='/configuration'>
            <button className='btn cloud'>
              <Translate value={'configure'} />
            </button>
          </Link>
        </section>
        <section className='infrastructure container'>
          { infrastructure.map((description, key) => <div key={key}>
            <Translate value={description.title} tag='h4' />
            <ul type='square'>
              {description.points.map((point, key) => <li key={key}>
                <Translate value={point} />
              </li>)}
            </ul>
          </div>) }
        </section>
      </main>
      <Footer />
    </React.Fragment>
  )
};
