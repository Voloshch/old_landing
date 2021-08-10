import React from 'react';
import tools from 'packs/constants/tools';
import { Translate } from '@davidqhr/react-i18nify';
import { Container, Row, Col } from 'reactstrap';

const Tools = () => {
	const list = tools.elements.map((listElement, index) => {
		return (
			<Col lg='6' sm='12' key={index} className='tools-col'>
				<Translate value={listElement.title} className={tools.nameList + '-item__title'} tag='p' />
				<Translate value={listElement.description} className={tools.nameList + '-item__desc'} tag='p' />
				{listElement.url && (
					<a href={listElement.url} className={tools.nameList + '-item__url'}>
						<Translate value={listElement.urlDescription} tag='p' />
					</a>
				)}
			</Col>
		);
	});

	return (
		<div className='section-dark tools-wrapper'>
			<div className='section-wrapper'>
				<Container>
					<Translate className='tools-title' value={tools.name} tag='p' />
					<Translate className='tools-desc' value={tools.title} tag='p' />
					<Row className={tools.nameList + '-list'}>{list}</Row>
				</Container>
			</div>
		</div>
	);
};

export default Tools;
