import React from 'react';
import Menu from 'packs/components/elements/menu';
import Footer from 'packs/components/elements/footer';
import { Container, Row } from 'reactstrap';
import ScrollButton from 'packs/components/elements/scroll_button';
import { people } from 'packs/constants/team';
import { Translate } from '@davidqhr/react-i18nify';

export default class Team extends React.Component {
  people() {
    return (
      people.map((person, i) => (
        <div key={i} className='photo_block'>
          <img src={person.img} />
          <Translate value={person.name} tag='h3' />
          <Translate value={person.occupation} tag='p' />
        </div>
      ))
    )
  };

  render() {
    const team = this.people();

    return (
      <div>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66'/>
        <Menu className='team' />
        <section id='team-section'>
          <Container>
          <Translate value='team.our_team' tag='h2'/>
            <Row>
            {team}
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}
