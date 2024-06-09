import React from 'react';
import { AscIcon } from '../../../../../assets/icons/AscIcon';
import { DescIcon } from '../../../../../assets/icons/DescIcon';
import './sortOption.scss';

export const SortOption = ({ option }) => {
	return (
		<div className='sort-option'>
			<span>{option.title}</span>
			{option.direction === 'asc' ? <AscIcon /> : <DescIcon />}
		</div>
	);
};
