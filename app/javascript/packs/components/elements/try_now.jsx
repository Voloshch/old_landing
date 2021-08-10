import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Translate } from '@davidqhr/react-i18nify';
import { Link } from 'react-router-dom';

export default function TryNow() {
	return (
		<section className='configure'>
			<Translate value={'pricingPage.create_future'} tag='h2' />
			<Link to='/configuration'>
				<button className='btn'><Translate value={'pricingPage.button'} /></button>
			</Link>
		</section>
	);
}
