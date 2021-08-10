import React, { memo, useEffect, useState } from 'react';
import { steps } from 'packs/constants/configuration';
import { Translate } from '@davidqhr/react-i18nify';

function ServiceConfiguration({ service, changeConfigurations, intialConfigs }) {
    const initialOptions = {};
    service.options.forEach(option => {
        initialOptions[option.title] = option.values ? option.values[0] : false;
    });

    // console.log('intialConfigs')
    // console.log(service.title)
    // console.log(service)
    // console.log(intialConfigs)
    // console.log('intialConfigs')

    const [value, setValue] = useState(0);
    const [isCheck, setIsCheck] = useState(service.isMain);
    const [options, setOptions] = useState(intialConfigs || initialOptions);

    // console.log(options)

    useEffect(() => {
        changeConfigurations(options);
    }, [options]);

    useEffect(() => {
        service.options.forEach(option => {
            initialOptions[option.title] = option.values ? option.values[value] : false;
        });
        setOptions(initialOptions);
    }, [value]);

    return (
        <React.Fragment>
            { service.add && <Translate value={service.add} tag='h6' /> }
            <div className='service'>
            <div className='flex'>
                { !service.isMain && <input value={isCheck} onClick={() => setIsCheck(prevState => !prevState)} type="checkbox" /> }
                <Translate value={service.title} tag='h6' />
            </div>
                <Translate className={'content'} value={service.description} tag='p' />
                <Translate className={'title'} value={'preset'} tag='h6' />
                <div className={'range-container'}>
                    <div className='dots'>
                        { steps.map(step => <div key={step} className={'dot'}>
                            <Translate className={value === '3' ? 'checked' : ''} value={step} tag='p' />
                        </div>)}
                    </div>
                    <input type="range"
                        disabled={!isCheck}
                        min={0}
                        max={3}
                        value={value}
                        onChange={e => setValue(e.target.value === '3' ? '2' : e.target.value)}
                        className={'range-container__range'} />
                </div>
                <Translate className={'title'} value={'config'} tag='p' />
                <div className={'options'}>
                    { service.options.map((option, key) => (
                        <label key={key}>
                            <Translate className={'content'} value={option.title} tag='p' />
                            { option.values ? <select disabled={!isCheck} className={'select'} value={options[option.title]} onChange={(e) => setOptions(prevState => ({ ...prevState, [option.title]: e.target.value }))}>
                                { option.values.map(value => <option key={value} value={value}>{value}</option>) }
                            </select> : <input disabled={!isCheck} value={options[option.title]} onClick={e => setOptions(prevState => ({ ...prevState, [option.title]: !prevState[option.title] }))} type="checkbox" /> }
                        </label>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
};

export default memo(ServiceConfiguration);
