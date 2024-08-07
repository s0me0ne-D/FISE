import React from 'react';
import './favoritesPage.scss';
import { useSelector } from 'react-redux';
import { RootStore } from '../../../../redux/store';
import { FavoriteMediaCard } from './FavoriteMediaCard/FavoriteMediaCard';

export const FavoritesPage = () => {
	const { favorites } = useSelector((store: RootStore) => store.favoritesMediaReducer);

	return (
		<div className='favorites'>
			{favorites.map((media) => (
				<FavoriteMediaCard media={media} />
			))}
		</div>
	);
};
