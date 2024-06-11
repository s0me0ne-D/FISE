import React, { useEffect } from 'react';
import { URL } from '../../../store/URL_SORE';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Loader';
import './mediaPoster.scss';

export const MediaPoster = ({ media_type, media, index, currentMovieIndex }) => {
	const { LAZY_LOAD_IMG_URL } = URL;
	const [loading, setLoading] = useState(true);
	const [isActive, setIsActive] = useState(false);
	useEffect(() => {
		if (index || index === 0) {
			index === currentMovieIndex ? setIsActive(true) : setIsActive(false);
		}
	}, [index, currentMovieIndex]);

	return (
		<NavLink className='media-card' to={`/${media_type}/id/${media.id}`}>
			<img
				onLoad={() => setLoading(false)}
				className={`media-card-poster ${isActive ? 'active' : ''} ${
					!media.poster_path && 'have-not'
				} ${loading && 'loading'} `}
				src={LAZY_LOAD_IMG_URL + media.poster_path}
				alt='poster'
				title={media.name ? media.name : media.title}
			/>
			{loading && <Loader className={'media-card-poster'} />}
		</NavLink>
	);
};
