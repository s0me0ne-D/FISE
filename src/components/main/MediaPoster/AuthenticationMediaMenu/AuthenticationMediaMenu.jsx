import React from 'react';
import './authenticationMediaMenu.scss';
import { InfoIcon } from '../../../../assets/icons/InfoIcon';
import { AddIcon } from '../../../../assets/icons/AddIcon';

export const AuthenticationMediaMenu = () => {
	return (
		<div className='media-menu'>
			<span className='information'>
				<InfoIcon />
			</span>
			<button className='add-media'>
				<AddIcon />
			</button>
		</div>
	);
};
