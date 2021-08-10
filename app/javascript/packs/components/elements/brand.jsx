import React from 'react';
import brands from 'packs/constants/brand';
import ImgBox from 'packs/components/elements/imgbox';
import { Container, Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import AliceCarousel from 'react-alice-carousel';

const Brand = () => {
	const brandList = brands.elements.map((listElement, i) => {
		return <ImgBox key={`key-${i}`} imgName={listElement} index={i} />;
	});

	const responsive = {
		500: { items: 1 },
		700: { items: 2 },
		920: { items: 3 },
		1220: { items: 4 },
		1399: { items: 5 },
	};

	let Carousel = null;

	return (
		<div className='brand-section-wrapper'>
			<Container>
				<Translate className='devops brand-title' value={brands.title} tag='p' />
				<Translate className='brand-text' value={brands.description} tag='p' />
				<Translate className='brand-subtitle' value={brands.subdescription} tag='p' />
			</Container>
			<Container className='display-lg '>
				<div className={'flex-row'}>{brandList}</div>
			</Container>
			<Container className='display-md display-sm'>
				<Row className='carousel-row'>
					<Col className='carousel_button'>
						<div className='button left' onClick={() => Carousel.slidePrev()} />
					</Col>

					<Col className='carousel'>
						<AliceCarousel
							items={brandList}
							startIndex={0}
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
		</div>
	);
};

export default Brand;
