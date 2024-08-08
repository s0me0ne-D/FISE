import React from 'react';
import './favoritesPage.scss';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../redux/store';
import { FavoriteMediaCard } from './FavoriteMediaCard/FavoriteMediaCard';

export const FavoritesPage = () => {
	const { favorites } = useSelector((store: RootStore) => store.favoritesMediaReducer);

	return (
		<div className='favorites'>
			<div className='favorites_container'>
				{favorites.map((media) => (
					<FavoriteMediaCard media={media} key={media.id} />
				))}
			</div>
		</div>
	);
};
