import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

const csrfToken = document.querySelector('[name=csrf-token]').content;

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isHidden: true
    }
    this.onChange=this.onChange.bind(this);
    this.onClick=this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.id]: e.target.value})
  }

  timeOut = () => {
    setTimeout(() => {this.setState({isHidden: true});}, 3000);
  }

  onClick() {
    this.logIn();
  }

  logIn = () => {
    const params = {
      email: this.state.email.toLocaleLowerCase(),
      password: this.state.password
    }
    const h = new Headers();
    h.append('Content-Type', 'application/json');
    h.append('X-CSRF-TOKEN', csrfToken);
    fetch('/sessions', {  
      method: 'POST',
      headers: h,  
      body: JSON.stringify(params)
    })
    .then((response) => {
      if(response.status === 201) {
      response.json()
      .then((data) => {
        localStorage.setItem('token', data.user_token);
        localStorage.setItem('email', data.email);
        this.props.history.push('/admin');
      })} else {
        this.setState({isHidden: false});
        this.timeOut();
      }
    })
  }

  onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      this.logIn();
    }
  }
  
  render() {
    const {email, password, isHidden} = this.state;
    return (
      <Form className='login'>
        <Input id='email' type='text' placeholder='Введите логин' value={email} onChange={this.onChange} onKeyDown={this.onKeyDown}></Input>
        <Input id='password' type='password' placeholder='Введите пароль' value={password} onChange={this.onChange} onKeyDown={this.onKeyDown}></Input>
        <Button onClick={this.onClick}>Войти</Button>
        <Link to='/'><Button>На главную</Button></Link>
        <p className={(isHidden ? 'hidden ' : '') + 'message'}>Вы ввели неверные данные. Пожалуйста, повторите попытку.</p>
      </Form>
    )
  }
}
