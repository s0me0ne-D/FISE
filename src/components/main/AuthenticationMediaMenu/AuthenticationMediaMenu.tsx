import React from 'react';
import './authenticationMediaMenu.scss';
import { AddIcon } from '../../../assets/icons/AddIcon';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../../redux/favoritesMediaSlice';
import { Media } from '../../../interfaces/media_interface';
import { MediaInformation } from './MediaInformation/MediaInformation';

export const AuthenticationMediaMenu = ({ media }: { media: Media }) => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(addFavorite(media));
	};
	return (
		<div
			className='media-menu'
			onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.preventDefault()}
		>
			<MediaInformation media={media} />
			<button className='add-media media-menu-option' onClick={handleOnClick}>
				<AddIcon />
			</button>
		</div>
	);
};
