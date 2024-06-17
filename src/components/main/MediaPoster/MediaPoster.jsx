import React, { useEffect } from 'react';
import { URL } from '../../../store/URL_SORE';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Loader';
import './mediaPoster.scss';
import { AuthenticationMediaMenu } from './AuthenticationMediaMenu/AuthenticationMediaMenu';
import posterPlaceholder from '../../../assets/posterPlaceholder.png';
import { useAuth0 } from '@auth0/auth0-react';

export const MediaPoster = ({ media_type, media, index, currentMovieIndex }) => {
	const { LAZY_LOAD_IMG_URL } = URL;
	const [loading, setLoading] = useState(true);
	const [isActive, setIsActive] = useState(false);
	const [showMediaMenu, setShowMediaMenu] = useState(false);
	console.log(media);
	useEffect(() => {
		if (index || index === 0) {
			index === currentMovieIndex ? setIsActive(true) : setIsActive(false);
		}
	}, [index, currentMovieIndex]);

	const { isAuthenticated } = useAuth0();

	const handleMouseEnter = () => isAuthenticated && setShowMediaMenu(true);
	const handleMouseLeave = () => isAuthenticated && setShowMediaMenu(false);

	return (
		<NavLink className='media-card' to={`/${media_type}/id/${media.id}`}>
			<div
				className={`poster-block ${isActive ? 'active' : ''}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<img
					onLoad={() => setLoading(false)}
					className={`media-card-poster  ${!media.poster_path && 'have-not'} ${
						loading && 'loading'
					} `}
					src={media.poster_path ? LAZY_LOAD_IMG_URL + media.poster_path : posterPlaceholder}
					alt='poster'
					title={media.name ? media.name : media.title}
				/>
				{showMediaMenu && <AuthenticationMediaMenu media={media} />}
			</div>
			{loading && <Loader className={'media-card-poster'} />}
		</NavLink>
	);
};
