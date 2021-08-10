import React from 'react';
import ScrollButton from 'packs/components/elements/scroll_button';
import { customersImg } from 'packs/constants/customers';
import { Col, Row } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from '@davidqhr/react-i18nify';
import { Link } from 'react-router-dom';

const Customers = () => {
	const list = customersImg.map((item, key) => (
			<Col key={key} className={'cont '} to={item.link}>
				<a className='practice_block' href={item.link}>
					<img src={item.src} alt={item.alt} />
				</a>
			</Col>
	));
	return (
		<section className='customers'>
			<ScrollButton scrollStepInPx='50' delayInMs='16.66' />
			<Translate value='customers.title' tag='h2' />
			<Row>{list}</Row>
				<Link className='link' to='/'>
					<p>
						<Translate value='start' />
						<FontAwesomeIcon icon='angle-right' />
					</p>
				</Link>
		</section>
	);
};

export default Customers;
