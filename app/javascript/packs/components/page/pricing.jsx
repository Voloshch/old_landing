import React, { useState } from 'react';
import Menu from 'packs/components/elements/menu';
import Footer from 'packs/components/elements/footer';
import ScrollButton from 'packs/components/elements/scroll_button';
import { Translate } from '@davidqhr/react-i18nify';

export default function Pricing() {
  const options = [1, 2, 3];
  const [hardware, setHardware] = useState({
    cpu: options[0],
    ram: options[0],
    storage: options[0],
    gpu: options[0]
  });

  return (
    <React.Fragment>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
        <Menu />
        <section className='pricing_main'>
            <div className='content'>
              <Translate value={'pricingPage.title'} tag='h1' />
              <Translate value={'pricingPage.description'} tag='h6' />
              <button className='btn cloud'><Translate value={'pricingPage.button'} /></button>
            </div>
        </section>
        <section className='how_it_work'>
          <Translate value={'pricingPage.subscription'} tag='h2' />
          <ul>
            <li><Translate value={'pricingPage.support'} /></li>
            <li><Translate value={'pricingPage.maintenance'} /></li>
            <li><Translate value={'pricingPage.right_support'} /></li>
          </ul>
          <Translate value={'pricingPage.right_support'} tag='h2' />
          <table>
            <thead>
              <tr>
                <th><Translate value={'pricingPage.type'} tag='b' /></th>
                <th><Translate value={'pricingPage.basic'} /></th>
                <th><Translate value={'pricingPage.standart'} /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><Translate value={'pricingPage.request'} tag='b' /></th>
                <th><Translate value={'pricingPage.medium_basic'} /></th>
                <th><Translate value={'pricingPage.medium_standard'} /></th>
              </tr>
              <tr className='blue'>
                <th><Translate value={'pricingPage.hight_request'} tag='b' /></th>
                <th><Translate value={'pricingPage.hight_basic'} /></th>
                <th><Translate value={'pricingPage.hight_standard'} /></th>
              </tr>
              <tr>
                <th><Translate value={'pricingPage.critical_request'} tag='b' /></th>
                <th><Translate value={'pricingPage.critical_basic'} /></th>
                <th><Translate value={'pricingPage.critical_standard'} /></th>
              </tr>
            </tbody>
          </table>
          <Translate className='small-font' value={'pricingPage.subscription_description'} tag='p' />
          <Translate value={'pricingPage.price_title'} tag='h2' />
          <table>
            <thead>
              <tr>
                <th><Translate value={'pricingPage.type'} tag='b' /></th>
                <th><Translate value={'pricingPage.basic'} /></th>
                <th><Translate value={'pricingPage.standart'} /></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><Translate value={'pricingPage.periodicity'} tag='b' /></th>
                <th><Translate value={'pricingPage.monthly'} /></th>
                <th><Translate value={'pricingPage.monthly'} /></th>
              </tr>
              <tr className='blue'>
                <th><Translate value={'pricingPage.support_level'} tag='b' /></th>
                <th><Translate value={'pricingPage.support_level_basic'} /></th>
                <th><Translate value={'pricingPage.support_level_standard'} /></th>
              </tr>
              <tr>
                <th><Translate value={'pricingPage.price'} tag='b' /></th>
                <th>
                  <Translate value={'pricingPage.vCPU'} />...$1.2500<br />
                  <Translate value={'pricingPage.ram'} />...$0.0625<br />
                  <Translate value={'pricingPage.storage'} />...$0.0075<br />
                  <Translate value={'pricingPage.gpu'} />...$2.5000
                </th>
                <th>
                  <Translate value={'pricingPage.vCPU'} />...$1.5625<br />
                  <Translate value={'pricingPage.ram'} />...$0.0781<br />
                  <Translate value={'pricingPage.storage'} />...$0.0094<br />
                  <Translate value={'pricingPage.gpu'} />...$3.1250
                </th>
              </tr>
            </tbody>
          </table>
          <Translate className='details' value={'pricingPage.server_derails'} tag='h2' />
          <div className='hardware'>
            <div>
              <label>
                <Translate value={'pricingPage.vCPU'} />
                <select value={hardware.cpu} onChange={(e) => setHardware(prevState => ({ ...prevState, cpu: e.target.value }))}>
                  { options.map(value => <option key={value} value={value}>{value}</option>) }
                </select>
              </label>
              <label>
                <Translate value={'pricingPage.ram'} />
                <select value={hardware.ram} onChange={(e) => setHardware(prevState => ({ ...prevState, ram: e.target.value }))}>
                  { options.map(value => <option key={value} value={value}>{value}</option>) }
                </select>
              </label>
              <label>
                <Translate value={'pricingPage.storage'} />
                <select value={hardware.storage} onChange={(e) => setHardware(prevState => ({ ...prevState, storage: e.target.value }))}>
                  { options.map(value => <option key={value} value={value}>{value}</option>) }
                </select>
              </label>
              <label>
                <Translate value={'pricingPage.gpu'} />
                <select value={hardware.gpu} onChange={(e) => setHardware(prevState => ({ ...prevState, gpu: e.target.value }))}>
                  { options.map(value => <option key={value} value={value}>{value}</option>) }
                </select>
              </label>
            </div>
            <Translate value={'pricingPage.price'} tag='p' />
          </div>
        </section>
        <section className='configure'>
          <Translate value={'pricingPage.create_future'} tag='h2' />
          <button className='btn'><Translate value={'pricingPage.button'} /></button>
        </section>
        <Footer />
    </React.Fragment>
  )
};
