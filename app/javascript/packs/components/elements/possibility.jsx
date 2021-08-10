import React from 'react';
import possibility from 'packs/constants/possibility';
import { Translate } from '@davidqhr/react-i18nify';
import { Container, Row, Col } from 'reactstrap';

const Possibility = () => {
	const possibilityList = possibility.elements.map((listElement, index) => (
		<ul key={index}>
			<Translate className='phase-element' value={listElement.name} tag='li' />
		</ul>
	));
	return (
		<div className='section-wrapper'>
			<div className='possibility-background possibility-wrapper'>
				<Container>
					<Row>
						<Col xl={6}>
							<Translate className='devops-title' value={possibility.title} tag='p' />
							<Translate className='possibility-text ' value={possibility.description} tag='p' />
							<div className='phase-container'> {possibilityList} </div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Possibility;
