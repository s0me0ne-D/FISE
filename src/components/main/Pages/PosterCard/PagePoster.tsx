import { URL } from '../../../../store/URL_SORE';
import posterPlaceholder from '../../../../assets/posterPlaceholder.png';
import { Media, MediaType } from '../../../../interfaces/media_interface';
import { AuthenticationMediaMenu } from '../../AuthenticationMediaMenu/AuthenticationMediaMenu';
import { RatingIcon } from '../../../../assets/icons/RatingIcon';
import { NavLink } from 'react-router-dom';
import './posterCard.scss';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Loader from '../../../Loader';
import { useSearchInFavoritesList } from '../../../../hooks/useSearchInFavoritesList';

export const PosterCard = ({ media, mediaType }: { media: Media; mediaType: MediaType }) => {
	const { isAuthenticated } = useAuth0();
	const [showMediaMenu, setShowMediaMenu] = useState<boolean>(false);
	const [isLoadingPoster, setIsLoadingPoster] = useState(true);

	const isFavorite = useSearchInFavoritesList(media.id);

	const handleMouseEnter = () => {
		isAuthenticated && setShowMediaMenu(true);
	};
	const handleMouseLeave = () => {
		isAuthenticated && setShowMediaMenu(false);
	};

	const lazyImageSrc = media.poster_path
		? URL.LAZY_LOAD_IMG_URL + media.poster_path
		: posterPlaceholder;

	return (
		<NavLink
			to={`/${mediaType}/id/${media.id}`}
			className={`genre-media-link ${isFavorite ? 'isFavorite' : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{showMediaMenu && <AuthenticationMediaMenu media={media} />}
			<img
				src={lazyImageSrc}
				onLoad={() => setIsLoadingPoster(false)}
				className={`poster ${media.poster_path ? '' : 'have-not'} ${isLoadingPoster && 'loading'}`}
				alt='poster'
			/>
			{isLoadingPoster && <Loader className='poster' />}
			<div className='media-title'>
				<span>{mediaType === 'movie' ? media.title : media.name}</span>
				<span className='title-rating'>
					<RatingIcon />
					{media.vote_average.toFixed(1)}
				</span>
			</div>
		</NavLink>
	);
};
