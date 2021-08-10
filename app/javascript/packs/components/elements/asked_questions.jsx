import React from 'react';
import { Container, Row } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import Minus from 'images/landing/Minus.svg';
import Plus from 'images/landing/Plus.svg';

export default class AskedQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false
    };
  }
  
  onClick = e => {
    const id = e.currentTarget.id;
    this.setState(prevState => ({ [id]: !prevState[id] }));
  }

  questions() {
    const questions = [
      {
        questionText: 'compliance.faq.question1.value',
        answer: 'compliance.faq.question1.answer'
      },
      {
        questionText: 'compliance.faq.question2.value',
        answer: 'compliance.faq.question2.answer'
      },
      {
        questionText: 'compliance.faq.question3.value',
        answer: 'compliance.faq.question3.answer'
      },
      {
        questionText: 'compliance.faq.question4.value',
        answer: 'compliance.faq.question4.answer'
      },
      {
        questionText: 'compliance.faq.question5.value',
        answer: 'compliance.faq.question5.answer'
      }
    ];
    return questions.map((question, i) => (
      <div key={i}>
        <Row id={i} onClick={this.onClick}>
          <div className='img_plus'>
            <img src={this.state[i] ? Minus : Plus} />
          </div>
          <div className='question_text'>
            <Translate value={question.questionText} tag='p' />
          </div>
        </Row>
        <Row>
          <div className={this.state[i] ? 'visible_text' : 'hidden_text'}>
            <Translate value={question.answer} tag='p' dangerousHTML />
          </div>
        </Row>
      </div>
    ));
  }
  render() {
    const constructQuestions = this.questions();
    return (
      <section id='faq'>
        <Container>
          <Translate value='compliance.faq.title' tag='h2' />
          {constructQuestions}
        </Container>
      </section>
    );
  }
}
