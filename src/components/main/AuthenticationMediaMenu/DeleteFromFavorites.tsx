import React from 'react';
import { Media } from '../../../interfaces/media_interface';
import { useDispatch } from 'react-redux';
import { CheckIcon } from '../../../assets/icons/CheckIcon';
import { deleteFromFavorites } from '../../../redux/favoritesMediaSlice';

export const DeleteFromFavorites = ({ media }: { media: Media }) => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(deleteFromFavorites(media.id));
	};
	return (
		<button
			className='add-media media-menu-option'
			title='Remove from favorites'
			onClick={handleOnClick}
		>
			<CheckIcon />
		</button>
	);
};
