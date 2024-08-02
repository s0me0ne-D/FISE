import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavorite } from '../../../redux/favoritesMediaSlice';
import { Media } from '../../../interfaces/media_interface';
import { AddIcon } from '../../../assets/icons/AddIcon';

export const AddToFavorites = ({ media }: { media: Media }) => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(addFavorite(media));
	};

	return (
		<button
			className='add-media media-menu-option'
			title='Add to favorites'
			onClick={handleOnClick}
		>
			<AddIcon />
		</button>
	);
};
