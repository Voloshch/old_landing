import React, { useState, useEffect } from 'react';
import { Input, Form, Button, FormGroup } from 'reactstrap';
import qs from 'qs';
import { MAIL_REGEX } from 'packs/constants/general';
import { Translate, I18n } from '@davidqhr/react-i18nify';

const EmailForm = ({ name }) => {
  const [ email, setEmail] = useState('');
  const [ comment, setComment] = useState('');
  const [ isSending, setIsSending] = useState(false);
  const [ isError, setIsError] = useState('pending');
  const [ message, setMessage] = useState('visibleText');

  const timeOut = () => {
    setTimeout(() => {
      setMessage('hiddenText');
    }, 3000);
  };

  const handleChange = event => {
    setComment(event.target.value);
  };

  const fieldsAreValid = () => {
    return email != '' && MAIL_REGEX.test(email);
  };

  const sendEmail = () => {
    const params = {
      email: email,
      comment: comment,
      language: I18n._localeKey === 'ru' ? 'ru' : 'en'
    }

    setIsSending(true);

    fetch('/send?' + qs.stringify(params))
      .then((response) => {
        setIsSending(false);
        if (response.ok) {
          setIsError('fulfilled');
          setEmail('');
          setComment('');
          setMessage('visibleText');
          timeOut();
        } else {
          setIsError('rejected');
          setMessage('visibleText');
          timeOut();
        }
      });
  };

  const onChange = e => {
    setEmail(e.currentTarget.value);
  }

  const handleFocus = e => {
    e.target.classList.remove('invalid');
  }

  const handleBlur = e => {
    if (!MAIL_REGEX.test(email) && email !== '') {
      e.target.classList.add('invalid');
    }
  }

  useEffect(() => {
    () => {
      clearTimeout(timeOut);
    }
  });

  return(
    <Form id='form' className={name}>
      <FormGroup className='input-wrapper'>
        <Input  onChange={onChange} placeholder={I18n.t('home.try_cloud.email')} onBlur={handleBlur} onFocus={handleFocus} className='email' value={email} />
      </FormGroup>
      <Input placeholder={I18n.t('home.try_cloud.comment')} type='textarea' value={comment} onChange={handleChange} name='text' id='notes' rows='4' />
      <Button className='general_button blue' onClick={sendEmail} disabled={!fieldsAreValid() || isSending}>
        <Translate value={ isSending ? 'home.try_cloud.sending' : 'home.try_cloud.send' } />
      </Button> 
      
      <div className={message}>
        {
          isError !== 'pending' &&
          <Translate value={ isError === 'fulfilled' ? 'home.try_cloud.thanks' : 'home.try_cloud.error' } tag='p' />
        }
      </div>
    </Form>
  )
};

export default EmailForm;
