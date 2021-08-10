import React, { useState } from 'react';
import Hardware from 'packs/components/elements/hardware';
import Specification from 'packs/components/elements/specification';
import Menu from 'packs/components/elements/menu';
import ScrollButton from 'packs/components/elements/scroll_button';
import { Row, Container } from 'reactstrap';
import { HashLink } from 'react-router-hash-link';
import Footer from 'packs/components/elements/footer';
import Multi from 'images/icons/multi.svg';
import Copy from 'images/icons/copying.svg';
import Update from 'images/icons/update.png';
import Monitoring from 'images/icons/monitoring.svg';
import { Translate } from '@davidqhr/react-i18nify';

const functional = [
  {
    img_src: Multi,
    description: 'cloud.functional.col1'
  },
  {
    img_src: Copy,
    description: 'cloud.functional.col2'
  },
  {
    img_src: Update,
    description: 'cloud.functional.col3'
  },
  {
    img_src: Monitoring,
    description: 'cloud.functional.col4'
  }
]

export default function Cloud() {
  const [language, setLang] = useState(localStorage.getItem('language'));
  const functionality = <Row>
    {
      functional.map((func, key) => (
        <div className='func_item' key={key}>
          <img src={func.img_src} />
          <Translate value={func.description} dangerousHTML tag='p'/>
        </div>
      ))
    }
  </Row>

  const handler = lang => {
    setLang(lang);
  }

  return (
    <div className='model'>
      <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
      <Menu onLanguageChanged={handler} />

      <section className='cloud_main'>
        <div className='blur'></div>
        <Container>
          <div className='cloud_info'>
            <h1 className='title'>ICDC Model 2020</h1>
            <Translate className='description' value='cloud.description' tag='p'/>
            <div className='button_block'>
              <HashLink to='/#try-cloud-section'>
                <button className='product_button'><Translate value='cloud.info_button'/></button>
              </HashLink>
            </div>
          </div>
        </Container>
      </section>

      <section className='complex'>
        <div className='complex_info'>
          <Translate value='cloud.hybrid_product.subtitle' tag='h3'/>
          <Translate value='cloud.hybrid_product.including_tools' tag='p'/>
        </div>
      </section>

      <Specification />
      <Hardware lang={language} />

      <section className='functional'>
        <Translate value='cloud.functional.title' tag='h2'/>
        {functionality}
      </section>

      <section className='get_start'>
        <div className='start_container'>
          <Translate value='cloud.get_start.title' tag='h3'/>
          <Translate value='cloud.get_start.description' tag='p'/>

          {new Array(3).fill('').map((_, key) => (
            <div key={key}>
              <Translate value={'cloud.get_start.step' + (key + 1) + '.title'}  tag='p' className='bold' dangerousHTML />
              <Translate value={'cloud.get_start.step' + (key + 1) + '.description'}  tag='p' dangerousHTML />
            </div>
          ))}
        </div>
      </section>

      <section className='find_out_prod'>
        <div className='blur'></div>
        <div className='find_content'>
          <Translate value='cloud.find_out.title'  tag='h2' />
          <Translate className='discription' value='cloud.find_out.description'  tag='p'/>
          <HashLink to='/#try-cloud-section'>
            <button className='product_button'><Translate value='cloud.button' /></button>
          </HashLink>
        </div>
      </section>
      <Footer />
    </div>
  )
}
