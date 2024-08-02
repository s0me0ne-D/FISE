import React from 'react';
import { Media } from '../../../interfaces/media_interface';
import { useDispatch } from 'react-redux';

export const DeleteFromFavorites = ({ media }: { media: Media }) => {
	const dispatch = useDispatch();
	const handleOnClick = () => {};
	return <div>DeleteFromFavorites</div>;
};
