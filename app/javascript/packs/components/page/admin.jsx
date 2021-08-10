import React from 'react';
import { Row, Button, Form, Input } from 'reactstrap';
import { newsImage } from 'packs/constants/services';
import Api from 'packs/components/helpers/api';
import { withRouter } from 'react-router-dom';
import Login from 'packs/components/page/login';
import JoditEditor from 'jodit-react';
import xss from 'xss';

class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
      isUpdate: false,
      isHidden: true,
      updatedId: '',
      updatedTitle: '',
      updatedText: '',
      title: '',
      text: '',
      updatedEngTitle: '',
      updatedEngText: '',
      engTitle: '',
      engText: '',
      updatedImgSrc: '',
      imgSrc: '',
      isCheckedId: '',
      isDisable: true,
      language: 'ru',
      isAuthorized: false
    }
    this._isMounted = false;
    this.onUpdate=this.onUpdate.bind(this);
    this.onDelete=this.onDelete.bind(this);
    this.addNews=this.addNews.bind(this);
    this.onChange=this.onChange.bind(this);
    this.onClose=this.onClose.bind(this);
    this.onSave=this.onSave.bind(this);
    this.onCheckImage=this.onCheckImage.bind(this);
    this.logOut=this.logOut.bind(this);
    this.setContent=this.setContent.bind(this);
    this.changeLang=this.changeLang.bind(this);
    this.checkIfSignedIn()
  }

  jodit;

	setRef = jodit => this.jodit = jodit;
	
	config = {
		readonly: false
	}

  checkIfSignedIn() {
    Api.get('/sessions')
    .then((response) => {
      if (response.status === 200) {
        this.setState({isAuthorized: true});
      }
    })
    .catch(() =>  this.signOut() )
  }

  signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.props.history.push('/login');
  }

  changeLang(e) {
    if (e.currentTarget.id === 'ru') {
      this.setState({language: 'ru'});
    } else {
      this.setState({language: 'en'});
    }
  }

  setContent(value) {
    if (this.state.language === 'ru') {
      this.setState({updatedText: value}, () => {
        this.disable();
      });
    } else {
      this.setState({updatedEngText: value}, () => {
        this.disable();
      });
    }
  }

  onDelete(e) {
    const news_id = e.target.id;
    if (this.state.news.length <= 5) {
      alert('Новостей в базе меньше 6. Пожалуйста, прежде, чем удалить новость, добавьте новую.')
    } else {
      Api.delete(`/articles/${this.state.news[news_id].id}`)
        .then((response) => {
          if (response.status === 200) {
            let arr = this.state.news;
            arr.splice([news_id], 1);
            this.setState({news: arr});
          }
        });
    }
  }

  onUpdate(e) {
    const news_id = e.target.id;
    this.setState(prevState => ({isUpdate: true, isHidden: false, updatedTitle: prevState.news[news_id].title, 
      updatedText: prevState.news[news_id].text, title: prevState.news[news_id].title, text: prevState.news[news_id].text,
      updatedEngTitle: prevState.news[news_id].eng_title, updatedEngText: prevState.news[news_id].eng_text, 
      engTitle: prevState.news[news_id].eng_title, engText: prevState.news[news_id].eng_text,
      updatedId: prevState.news[news_id].id, imgSrc: prevState.news[news_id].image_src, 
      updatedImgSrc: prevState.news[news_id].image_src, isCheckedId: news_id}))
  }

  addNews() {
    this.setState(prevState => ({isHidden: false, isDisable: prevState.updatedTitle && prevState.updatedText && prevState.updatedImgSrc ? false : true}));
  }

  onChange(e) {
    if (this.state.language === 'ru') {
      this.setState({updatedTitle: e.currentTarget.value}, () => {
        this.disable();
      })
    } else {
      this.setState({updatedEngTitle: e.currentTarget.value}, () => {
        this.disable();
      })
    }
  }

  onCheckImage(e) {
    this.setState({ updatedImgSrc: newsImage[Number(e.currentTarget.id)]}, () => {
      this.disable();
    });
  }

  disable() {
    if (this.state.isUpdate) {
      this.setState(prevState => ({isDisable: !(prevState.updatedImgSrc !== prevState.imgSrc 
        || prevState.title !== prevState.updatedTitle || prevState.text !== prevState.updatedText 
        || prevState.engTitle !== prevState.updatedEngTitle || prevState.engText !== prevState.updatedEngText) 
        && prevState.updatedText && prevState.updatedTitle && prevState.updatedText !== '<br>'
        && prevState.updatedEngText && prevState.updatedEngTitle && prevState.updatedEngText !== '<br>'}));
    } else {
      this.setState(prevState => ({isDisable: !prevState.updatedImgSrc || !prevState.updatedTitle || 
        !prevState.updatedEngTitle || (prevState.updatedText === '<br>' || !prevState.updatedText) || 
        (prevState.updatedEngText === '<br>' || !prevState.updatedEngText)}));
    }
  }

  onSave() {
    const params = {
      id: this.state.updatedId,
      title: this.state.updatedTitle,
      text: this.state.updatedText,
      eng_title: this.state.updatedEngTitle,
      eng_text: this.state.updatedEngText,
      image_src: this.state.updatedImgSrc
    };
    if (this.state.isUpdate) {
      Api.put(`/articles/${params.id}`, params)
        .then((response) => {
          response.json()
          .then((data) => {
            let arr = this.state.news;
            arr.splice(this.state.isCheckedId, 1, data);
            this.setState({isUpdate: false, isHidden: true, updatedTitle: '', updatedText: '', updatedEngTitle: '', updatedEngText: '', updatedId: '', updatedImgSrc: '', isDisable: true, news: arr});
          })
        })
    } else {
      Api.post(`/articles`, params)
        .then((response) => {
          response.json()
          .then((data) => {
            let arr = this.state.news;
            arr.unshift(data);
            this.setState({isUpdate: false, isHidden: true, updatedTitle: '', updatedText: '', updatedEngTitle: '', updatedEngText: '', updatedId: '', updatedImgSrc: '', isDisable: true, news: arr});
          })
        })
    }
  }

  onClose() {
    this.setState({isUpdate: false, isHidden: true, updatedTitle: '', updatedText: '', updatedEngTitle: '', updatedEngText: '', updatedId: '', updatedImgSrc: '', isDisable: true, isCheckedId: ''});
  }

  logOut() {
    Api.delete('/sessions')
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          this.props.history.push('/login');
        }
      })
  }

  componentDidMount() {
    this._isMounted = true;
    Api.get('/articles')
    .then((response) => {
      response.json()
      .then((data) => {
        if (this._isMounted) {
          this.setState({news: data});
        }
      })
    })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {news, isCheckedId, isUpdate, updatedImgSrc, isHidden, updatedTitle, updatedText, isDisable, language, updatedEngTitle, updatedEngText, isAuthorized} = this.state, newsIsEmpty =  news === [];
    const data = !newsIsEmpty && news.map((article, index) => (
      <Row key={index}>
        <div className='title content'><h2>{language  === 'ru' ? article.title : article.eng_title}</h2></div>
        <div className='text content' dangerouslySetInnerHTML={{__html: language  === 'ru' ? xss(article.text) : xss(article.eng_text)}} />
        <div className='date content'><h2>{article.created_at.slice(0, 10)}</h2></div>
        <Button id={index} onClick={this.onUpdate}>Обновить</Button>
        <Button id={index} onClick={this.onDelete}>Удалить</Button>
        <div className='line' />
      </Row>
    ));

    const imagesBlock = newsImage.map((service, index) => (
      <div id={index} className={(isCheckedId !== '' && isUpdate || !isUpdate) && (updatedImgSrc === service ? 'checked ' : '') + 'img_container'} onClick={this.onCheckImage} key={index}>
        <img src={service} />
      </div>
    ))

    return (
      <div>
        { isAuthorized ? <div className='admin'>
          <div className={(isHidden ? '' : 'white ') + 'bottom'}>
            <div className='head_buttons'>
              <Button disabled={language === 'ru'} id='ru' onClick={this.changeLang}>RUS</Button>
              <Button disabled={language === 'en'} id='en' onClick={this.changeLang}>ENG</Button>
            </div>
            <h1>Новости</h1>
            <Button className='logout' onClick={this.logOut}>Выйти</Button>
            <Row className='thead'>
              <div className='title content'><h2>Заголовок</h2></div>
              <div className='text content thead'><h2>Содержание</h2></div>
              <div className='date content thead'><h2>Дата добавления</h2></div>
              <div className='empty' />
            </Row>
            <div className='line' />
            {data}
            <Button className='add_news' onClick={this.addNews}>Добавить новость</Button>
          </div>
          <div className= {(isHidden ? 'hidden ' : '') + 'form_block'}>
            <Row className='buttons_row'>
              <Button disabled={language === 'ru'} id='ru' onClick={this.changeLang}>RUS</Button>
              <Button disabled={language === 'en'} id='en' onClick={this.changeLang}>ENG</Button>
            </Row>
            <Form>
              <span>Заголовок:</span>
              <Input value={language === 'ru' ? updatedTitle : updatedEngTitle} onChange={this.onChange}></Input>
              <br />
              <span>Содержание:</span>
              <br /><br />
              <JoditEditor
                editorRef={this.setRef}
                value={language === 'ru' ? updatedText : updatedEngText}
                config={this.config}
                onChange={this.setContent}
              />
              <br /><br />
              <span>Выберите картинку:</span>
              <div className='overflow'>
                {imagesBlock}
              </div>
              <div className='button_block'>
                <Button disabled={isDisable} onClick={this.onSave}>Сохранить</Button>
                <Button onClick={this.onClose}>Закрыть</Button>
              </div>
            </Form>
          </div>
        </div> : <Login />
      }
      </div>
    )
  }
}

export default withRouter(Admin);
