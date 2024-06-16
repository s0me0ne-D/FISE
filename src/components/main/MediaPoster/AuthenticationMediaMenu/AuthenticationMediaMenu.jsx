import React from 'react';
import './authenticationMediaMenu.scss';
import { InfoIcon } from '../../../../assets/icons/InfoIcon';
import { AddIcon } from '../../../../assets/icons/AddIcon';

export const AuthenticationMediaMenu = () => {
	return (
		<div className='media-menu' onClick={(event) => event.preventDefault()}>
			<span className='information media-menu-option'>
				<InfoIcon />
			</span>
			<button className='add-media media-menu-option'>
				<AddIcon />
			</button>
		</div>
	);
};
