import React from 'react';
import { NavLink } from 'react-router-dom';
import { MediaType } from '../../../../../../interfaces/media_interface';

interface PopUpTitleProps {
	title: string;
	mediaType: MediaType;
	mediaId: number;
}

export const PopUpTitle = ({ title, mediaId, mediaType }: PopUpTitleProps) => {
	return <NavLink to={`${mediaType}/id/${mediaId}`}>{title}</NavLink>;
};
