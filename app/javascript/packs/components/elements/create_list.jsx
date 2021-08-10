import React from 'react';
import { Translate } from '@davidqhr/react-i18nify';

const CreateList = ({ data }) => {
	const list = data.elements.map((listElement, index) => {
		let listClass = [data.nameList + '-item'];
		if (listElement.wrapperClassName) {
			listClass.push(listElement.wrapperClassName);
		}

		return (
			<div key={index} className={listClass.join(' ')}>
				{listElement.img && (
					<div className='img_container'>
						<img src={listElement.img} />
					</div>
				)}

				{listElement.title && (
					<Translate value={listElement.title} className={data.nameList + '-item__title'} tag='p' />
				)}

				{listElement.description && (
					<Translate value={listElement.description} className={data.nameList + '-item__desc'} tag='p' />
				)}
			</div>
		);
	});

	return <div className={'flex-row ' + data.nameList + '-list'}>{list}</div>;
};

export default CreateList;
