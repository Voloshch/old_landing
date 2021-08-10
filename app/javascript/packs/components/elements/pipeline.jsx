import React from 'react';
import pipeline from 'packs/constants/pipeline';
import { Translate } from '@davidqhr/react-i18nify';
import { Container, Row, Col } from 'reactstrap';
import AliceCarousel from 'react-alice-carousel';

const Pipeline = () => {
	const responsive = {
		500: { items: 1 },
		700: { items: 2 },
		920: { items: 3 },
		1220: { items: 4 },
		1399: { items: 5 },
	};

	let Carousel = null;
	let piplineLastelementIndex = pipeline.elements.length - 1;

	const pipelineList = pipeline.elements.map((listElement, index) => (
		<div key={index} className='chevron flex-row'>
			<Translate value={listElement.name} className='chevron-text' tag='div' />
			<Translate value={listElement.type} className='chevron-text' tag='div' />
		</div>
	));

	const pipelineListMin = pipeline.elements.map((listElement, index) => (
		<li key={index} className={'step ' + (piplineLastelementIndex == index ? 'end' : '')}>
			<Translate value={listElement.name} className='step-text' tag='span' />
			<Translate value={listElement.type} className='step-text' tag='span' />
		</li>
	));
	return (
		<div className='pipeline pipeline-section-wrapper'>
			<Container className='display-lg'>
				<Translate value={pipeline.title} className='chevron-title' tag='p' />
				<div className='flex-row'>{pipelineList}</div>
			</Container>
			<Container className='display-md'>
				<Translate value={pipeline.title} className='chevron-title' tag='p' />
				<Row className='carousel-row'>
					<Col className='carousel_button'>
						<div className='button left' onClick={() => Carousel.slidePrev()} />
					</Col>

					<Col className='carousel'>
						<AliceCarousel
							items={pipelineList}
							dotsDisabled={true}
							fadeOutAnimation={true}
							mouseDragEnabled={true}
							responsive={responsive}
							buttonsDisabled={true}
							ref={(el) => (Carousel = el)}
						/>
					</Col>

					<Col className='carousel_button'>
						<div id='next' className='button' onClick={() => Carousel.slideNext()} />
					</Col>
				</Row>
			</Container>
			<Container className='display-sm'>
				<Translate value={pipeline.title} className='chevron-title' tag='p' />
				<ul className='steps'>{pipelineListMin}</ul>
			</Container>
		</div>
	);
};

export default Pipeline;
