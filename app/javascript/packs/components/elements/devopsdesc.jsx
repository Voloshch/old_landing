import React from 'react';
import devops from 'packs/constants/devops';
import { Translate } from '@davidqhr/react-i18nify';
import { Container, Row, Col } from 'reactstrap';

const DevOpsDesc = () => {
	const devopsList = devops.elements.map((listElement, index) => (
			<React.Fragment key={index}>
				<Translate className='devops-title' value={listElement.title} tag='p' />
				<Translate className='devops-text' value={listElement.description} tag='p' />
			</React.Fragment>
	));
	return (
		<div className='section-wrapper'>
			<Container>
				<Row>
					<Col xl={7} className='devops-element'>
						<div className='devops-list'>{devopsList}</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default DevOpsDesc;
