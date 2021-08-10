import React from 'react';

const ImgBox = ({ imgName, index }) => {
	return (
		<div className='box-img-wrapper'>
			<div key={index} className={'box-img box-img__' + imgName}></div>
		</div>
	);
};

export default ImgBox;
