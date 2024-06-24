import React from 'react';
import './underConstructionPage.scss';
import CommingSoonImage from './image/CommingSoonImage.svg';

export const UnderConstructionPage = () => {
	return (
		<div className='under-construction'>
			<img src={CommingSoonImage} alt='Comming Soon' />
		</div>
	);
};
