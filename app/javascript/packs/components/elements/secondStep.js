import React, { memo } from 'react';
import { Translate } from '@davidqhr/react-i18nify';
import Background from 'images/landing/step2.png';

function SecondStep({ changeStep }) {
    return <div className={'second'}>
        <img src={Background} alt='Vercel Logo' className='main__img' />
        <div className={'contact-form'}>
            <Translate value={'title'} tag='h3' />
            <Translate value={'contactInfo'} tag='h6' />
            <label>
                <Translate value={'name'} />
                <input type='text' />
            </label>
            <label>
                <Translate value={'email'} />
                <input type='text' />
            </label>
            <label>
                <Translate value={'company'} />
                <input type='text' />
            </label>
            <label>
                <input type="checkbox" />
                <Translate value={'agree'} />&nbsp;<a href='https://ibacloud.by'>
                    <Translate value={'policy'} />
                </a>
            </label>
            <div>
                <button className='btn' onClick={() => changeStep(-1)}>
                    <Translate value={'back'} />
                </button>
                <button className='btn cloud' onClick={() => changeStep(1)}>
                    <Translate value={'submit'} />
                </button>
            </div>
        </div>
    </div>
};

export default memo(SecondStep);
