import React from 'react';
import './authenticationMediaMenu.scss';
import { Media } from '../../../interfaces/media_interface';
import { MediaInformation } from './MediaInformation/MediaInformation';
import { AddToFavorites } from './AddToFavorites';
import { DeleteFromFavorites } from './DeleteFromFavorites';
import { useSearchInFavoritesList } from '../../../hooks/useSearchInFavoritesList';

export const AuthenticationMediaMenu = ({ media }: { media: Media }) => {
	const isInFavoritesList = useSearchInFavoritesList(media.id);

	return (
		<div
			className={`media-menu ${isInFavoritesList ? 'isFavorite' : ''}`}
			onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.preventDefault()}
		>
			<MediaInformation media={media} />
			{isInFavoritesList ? <DeleteFromFavorites media={media} /> : <AddToFavorites media={media} />}
		</div>
	);
};
