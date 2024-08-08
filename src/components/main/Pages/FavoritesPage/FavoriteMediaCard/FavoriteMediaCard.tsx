import React from 'react';
import './favoriteMediaCard.scss';
import { Media, MediaType } from '../../../../../interfaces/media_interface';
import { NavLink } from 'react-router-dom';
import { URL } from '../../../../../store/URL_SORE';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const FavoriteMediaCard = ({ media }: { media: Media }) => {
	// const title = media.name ? media.name : media.title;
	const mediaType: MediaType = media.title ? 'movie' : 'tv';

	return (
		<NavLink to={`/${mediaType}/id/${media.id}`} className='favorite-media'>
			<LazyLoadImage
				src={URL.ORIGINAL_IMG_URL + media.backdrop_path}
				className='title-background'
				placeholderSrc={URL.LAZY_LOAD_IMG_URL + media.backdrop_path}
			/>{' '}
		</NavLink>
	);
};
