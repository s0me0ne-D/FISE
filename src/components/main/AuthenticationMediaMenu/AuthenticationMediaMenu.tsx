import React from 'react';
import './authenticationMediaMenu.scss';
import { Media } from '../../../interfaces/media_interface';
import { MediaInformation } from './MediaInformation/MediaInformation';
import { AddToFavorites } from './AddToFavorites';

export const AuthenticationMediaMenu = ({ media }: { media: Media }) => {
	return (
		<div
			className='media-menu'
			onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.preventDefault()}
		>
			<MediaInformation media={media} />
			<AddToFavorites media={media} />
		</div>
	);
};
