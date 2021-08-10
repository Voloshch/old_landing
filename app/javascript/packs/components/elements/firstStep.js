import React, { memo, useCallback, useEffect, useState } from 'react';
import ServiceConfiguration from './serviceConfiguration';
import { services } from 'packs/constants/configuration';
import { Translate } from '@davidqhr/react-i18nify';

function FirstStep({ changeStep, setConfig, intialConfigs }) {
    const [type, setType] = useState('public');
    const [servicesConfigurations, setServicesConfiguration] = useState(intialConfigs);

    return <div className={'config'}>
        <Translate value={'confTitle'} tag='h3' />
        <Translate value={'cloudType'} tag='p' />
        <div className={'first'}>
            <div className={'column'}>
                <div className={'types'}>
                    <div className={(type === 'public' ? 'checked' : '') + ' flex'} onClick={() => setType('public')}>
                        <Translate value={'public'} tag='p' />
                        <Translate value={'forProviders'} tag='p' />
                    </div>
                    <div className={(type === 'private' ? 'checked' : '') + ' flex'} onClick={() => setType('private')}>
                        <Translate value={'private'} tag='p' />
                        <Translate value={'forPersonal'} tag='p' />
                    </div>
                </div>
                <Translate value={'configuration'} tag='h6' />
                <Translate value={'core'} tag='p' />
                { services.map(service => <ServiceConfiguration key={service.title}
                                                                service={service}
                                                                intialConfigs={servicesConfigurations[service.title.toLocaleLowerCase()]}
                                                                changeConfigurations={useCallback(newConf => setServicesConfiguration(prevState => (
                                                                    { ...prevState, [service.title.toLocaleLowerCase()]: newConf }
                                                                )), [])} />) }
            </div>
            <div className={'column'}>
                <div className={'summary'}>
                    <Translate value={'summary'} tag='h3' />
                    <label>
                        <Translate value={'cloudType'} tag='h6' />
                        <Translate value={'public'} tag='p' />
                    </label>
                    <label>
                        <Translate value={'config'} tag='h6' />
                        <Translate value={'public'} tag='p' />
                    </label>
                    <label>
                        <Translate value={'support'} tag='h6' />
                        <Translate value={'basic'} tag='p' />
                    </label>
                    <Translate value={'requirements'} tag='h6' />
                    <div></div>
                </div>
                <div>
                    <button onClick={() => {
                        changeStep(1);
                        setConfig(servicesConfigurations);
                    }} className='btn cloud'><Translate value={'contactInfo'} /></button>
                </div>
            </div>
        </div>
    </div>
};

export default memo(FirstStep);
