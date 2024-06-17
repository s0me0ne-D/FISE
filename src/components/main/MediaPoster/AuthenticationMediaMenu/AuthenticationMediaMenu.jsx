import React from 'react';
import './authenticationMediaMenu.scss';
import { InfoIcon } from '../../../../assets/icons/InfoIcon';
import { AddIcon } from '../../../../assets/icons/AddIcon';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../../../redux/favoritesMediaSlice';

export const AuthenticationMediaMenu = ({ media }) => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(addFavorite(media));
	};
	return (
		<div className='media-menu' onClick={(event) => event.preventDefault()}>
			<span className='information media-menu-option'>
				<InfoIcon />
			</span>
			<button className='add-media media-menu-option' onClick={handleOnClick}>
				<AddIcon />
			</button>
		</div>
	);
};
