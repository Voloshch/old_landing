import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import ServerImg from 'images/landing/server.png';

const Hardware = ({lang}) => {
  const [currentSlide, setSlide] = useState('switches');
  const [language, setLang] = useState(localStorage.getItem('language'));

  const clickSlide = e => {
    if (e.currentTarget.className !== 'current ' + currentSlide) {
      setSlide(e.currentTarget.className);
    }
  }

  const getClassName = (slide) => {
    if (slide === currentSlide) {
      return 'current ' + slide;
    } else {
      return slide;
    }
  }

  useEffect(() => {
    if (lang !== language) {
      setLang(lang);
    }
  },[lang]);

  const switches = () => {
    let leftClass = ['left'];
    if (currentSlide === 'switches') {
      leftClass.push('current');
    } else {
      leftClass.push('hidden');
    }
    return <div className={ leftClass.join(' ') }>
      <Translate value='cloud.hardware.model' dangerousHTML tag='p' className='bold' />
      {new Array(4).fill('').map((_, key) => (
        <div key={key}>
          <Translate value={'cloud.hardware.equipment' + (key + 1) + '.title'} tag='p' className='bold' />
          <Translate value={'cloud.hardware.equipment' + (key + 1) + '.description'} dangerousHTML tag='p' />
        </div>
      ))}
    </div>
  }

  const image = () => {
    let imgClass = ['img'], rotateClass = ['rotate'], storageClass = ['sn'];
    if (currentSlide === 'image') {
      imgClass.push('current');
    } else {
      imgClass.push('hidden');
    }
    if (lang !== 'en') {
      rotateClass.push(lang);
      storageClass.push(lang)
    }
    return <Row className={ imgClass.join(' ') }>
      <div className={ rotateClass.join(' ') }>
        <Translate className='sw' value='cloud.hardware.switches' tag='p' />
        <Translate className='cng' value='cloud.hardware.gpu' tag='p' />
        <Translate className='on' value='cloud.hardware.openshift' tag='p' />
        <Translate className={ storageClass.join(' ') } value='cloud.hardware.storage' tag='p' />
      </div>
      <img src={ServerImg} />
    </Row>
  }

  const right = () => {
    let rightClass = ['right'];
    if (currentSlide === 'network') {
      rightClass.push('current');
    } else {
      rightClass.push('hidden');
    }
    return  <div className={ rightClass.join(' ') }>
      {new Array(4).fill('').map((_, key) => (
        <div key={key}>
          <Translate value={'cloud.hardware.equipment' + (key + 5) + '.title'} tag='p' className='bold' />
          <Translate value={'cloud.hardware.equipment' + (key + 5) + '.description'} dangerousHTML tag='p' />
        </div>
      ))}
    </div>
  }

  return (
    <section className='hardware'>
      <Translate value='cloud.hardware.title' tag='h3' />

      <div className='specific'>
        <Translate value='cloud.hardware.description' tag='p' />

        <Row className='control_panel' >
          <div className={ getClassName('switches') } onClick={clickSlide}><Translate value='cloud.hardware.tab1' dangerousHTML tag='p' /></div>
          <div className={ getClassName('image') } onClick={clickSlide}><Translate className='visual' value='cloud.hardware.tab2' dangerousHTML tag='p' /></div>
          <div className={ getClassName('network') } onClick={clickSlide}><Translate value='cloud.hardware.tab3' dangerousHTML tag='p' /></div>
        </Row>

        <Row>
          {switches()}

          {image()}

          {right()}
        </Row>
      </div>

      <Translate value='cloud.hardware.resources.title' dangerousHTML tag='p' className='bold' />
      <Translate value='cloud.hardware.resources.value' dangerousHTML tag='p' />
    </section>
  )
}

export default Hardware;
