import React, { useEffect } from 'react';
import { URL } from '../../../store/URL_SORE';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Loader from '../../Loader';
import './mediaPoster.scss';
import { AuthenticationMediaMenu } from '../AuthenticationMediaMenu/AuthenticationMediaMenu';

import posterPlaceholder from '../../../assets/posterPlaceholder.png';
import { useAuth0 } from '@auth0/auth0-react';
import { Media, MediaType } from '../../../interfaces/media_interface';

interface MediaPosterProps {
	media_type: MediaType;
	media: Media;
	index?: number;
	currentMovieIndex?: number;
}

export const MediaPoster = ({ media_type, media, index, currentMovieIndex }: MediaPosterProps) => {
	const { LAZY_LOAD_IMG_URL } = URL;
	const [loading, setLoading] = useState<boolean>(true);
	const [isCurrentCard, setIsCurrentCard] = useState<boolean>(false);
	const [showMediaMenu, setShowMediaMenu] = useState<boolean>(false);
	const [isActiveCard, setIsActiveCard] = useState<boolean>(false);
	useEffect(() => {
		if (index || index === 0) {
			index === currentMovieIndex ? setIsCurrentCard(true) : setIsCurrentCard(false);
		}
	}, [index, currentMovieIndex]);

	const { isAuthenticated } = useAuth0();

	const handleMouseEnter = () => {
		isAuthenticated && setShowMediaMenu(true);
		setIsActiveCard(true);
	};
	const handleMouseLeave = () => {
		isAuthenticated && setShowMediaMenu(false);
		setIsActiveCard(false);
	};

	const imageSrc = media.poster_path ? LAZY_LOAD_IMG_URL + media.poster_path : posterPlaceholder;

	return (
		<NavLink className='media-card' to={`/${media_type}/id/${media.id}`}>
			<div
				className={`poster-block ${isCurrentCard ? 'isCurrentCard' : ''} ${
					isActiveCard ? 'isActive' : ''
				}`}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<img
					onLoad={() => setLoading(false)}
					className={`media-card-poster  ${!media.poster_path && 'have-not'} ${
						loading ? 'loading' : ''
					} `}
					src={imageSrc}
					alt='poster'
					title={media.name ? media.name : media.title}
				/>
				{showMediaMenu && <AuthenticationMediaMenu media={media} />}
			</div>
			{loading && <Loader className={'media-card-poster'} height={150} />}
		</NavLink>
	);
};
