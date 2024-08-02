import React, { useEffect, useState } from 'react';
import './authenticationMediaMenu.scss';
import { Media } from '../../../interfaces/media_interface';
import { MediaInformation } from './MediaInformation/MediaInformation';
import { AddToFavorites } from './AddToFavorites';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../redux/store';
import { DeleteFromFavorites } from './DeleteFromFavorites';

export const AuthenticationMediaMenu = ({ media }: { media: Media }) => {
	const { favorites } = useSelector((store: RootStore) => store.favoritesMediaReducer);
	const [isFavorite, setIsFavorite] = useState<boolean>(false);
	useEffect(() => {
		favorites.includes(media) ? setIsFavorite(true) : setIsFavorite(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [favorites]);
	return (
		<div
			className='media-menu'
			onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => event.preventDefault()}
		>
			<MediaInformation media={media} />
			{isFavorite ? <DeleteFromFavorites media={media} /> : <AddToFavorites media={media} />}
		</div>
	);
};
