import React from 'react';
import Menu from 'packs/components/elements/menu';
import InfoSection from 'packs/components/elements/info_section';
import TryNow from 'packs/components/elements/try_now';
import Footer from 'packs/components/elements/footer';
import ScrollButton from 'packs/components/elements/scroll_button';
import MigratorMainImg from 'images/landing/migrator.png';
import { Container, Row, Col } from 'reactstrap';
import Translate from '@davidqhr/react-i18nify/build/lib/Translate';
import { migratorList, stepMigrator, migratorImg } from 'packs/constants/migrator';
import FeaturesAndCapabilities from 'packs/components/elements/features_and_capabilities';
import MigratorImgList from 'packs/components/elements/migratorImgList';
import { HashLink } from 'react-router-hash-link';


const stepMigratorList = stepMigrator.map((listElement, index) => (
  <li key={index} className='stepProgress-item'>
    <Translate value={listElement.description} tag='span' dangerousHTML/>
  </li>
));

export default class Migrator extends React.Component {
  render() 
  {
    return (
      <div className='migrator'>
        <ScrollButton scrollStepInPx='50' delayInMs='16.66' />
        <Menu />
        <InfoSection className='migrator' title='Migrator' description='migrator.description' src={MigratorMainImg} alt='Migrator image' documentationLink='https://help.icdc.io/migrator/'/>
          <main className='migrator-wrapper'>
                <section className='whatIsVpc'>
                  <Container>
                    <Row className='wrapper'>
                      <Col xl={7}>
                        <Translate value='migrator.introduction.title' tag='h2' />
                        <Translate value='migrator.introduction.description' tag='p' dangerousHTML/>
                      </Col>
                    </Row>
                    
                  </Container>
                </section>

                <section className='resourses-migrator' >
                  <Container>
                    <Row>
                      <Col xl={7}>
                        <Translate value='migrator.canBeMigrated.title' tag='h2' />
                        <Translate value='migrator.canBeMigrated.description' tag='p' dangerousHTML/>
                      </Col>
                    </Row>
                  </Container>
                </section>

                <section  className='step-migrator'>
                  <Container>
                    <Row>
                      <Col >
                      <Translate value='migrator.howItWorks.title' tag='h2' />
                      <ul className='stepProgress'>
                      {stepMigratorList}
                      </ul>
                      </Col>
                    </Row>
                  </Container>
                </section>

                <section className='tools appraisal'>
                  <Container>
                      <Col className='wrapper' xl={9}>
                        <Translate value='migrator.assessment.title' tag='h2' />
                        <Translate value='migrator.assessment.description' tag='p' />
                        <HashLink to='/#try-cloud-section'>
                          <Translate className='appraisal-email' value='migrator.assessment.descriptionSecond' tag='p' />
                        </HashLink>
                        <Translate className='appraisal-desc' value='migrator.assessment.descriptionContinuation' tag='p' />
                      </Col>
                  </Container>
                </section>

                <section className='possibility benefits-block'>
                  <Container>
                      <Translate value='migrator.benefits.title' tag='h2' />
                      <FeaturesAndCapabilities array={migratorList} className='migrator'/>
                  </Container>
                </section>

                <section className='migratorImg'>
                  <Container>
                      <Col className='center-block'>
                      <MigratorImgList className='migrator-bottom' array={migratorImg} value='migrator.relatedServices.title' />
                      </Col>
                  </Container>
                </section>

          </main>
        <TryNow textTryNow='try_now.try_now' />
        <Footer />
      </div>
    )
  }
}
