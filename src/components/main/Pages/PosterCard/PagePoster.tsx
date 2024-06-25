import { LazyLoadImage } from 'react-lazy-load-image-component';
import { URL } from '../../../../store/URL_SORE';
import posterPlaceholder from '../../../../assets/posterPlaceholder.png';
import { Media, MediaType } from '../../../../interfaces/media_interface';
import { AuthenticationMediaMenu } from '../../AuthenticationMediaMenu/AuthenticationMediaMenu';
import { RatingIcon } from '../../../../assets/icons/RatingIcon';
import { NavLink } from 'react-router-dom';
import './posterCard.scss';
import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const PosterCard = ({ media, mediaType }: { media: Media; mediaType: MediaType }) => {
	const { isAuthenticated } = useAuth0();
	const [showMediaMenu, setShowMediaMenu] = useState<boolean>(false);

	const handleMouseEnter = () => isAuthenticated && setShowMediaMenu(true);
	const handleMouseLeave = () => isAuthenticated && setShowMediaMenu(false);

	return (
		<NavLink
			to={`/${mediaType}/id/${media.id}`}
			className='genre-media-link'
			key={media.id}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{showMediaMenu && <AuthenticationMediaMenu media={media} />}
			<LazyLoadImage
				src={media.poster_path ? URL.ORIGINAL_IMG_URL + media.poster_path : posterPlaceholder}
				className={`poster ${media.poster_path ? '' : 'have-not'}`}
				placeholderSrc={
					media.poster_path ? URL.LAZY_LOAD_IMG_URL + media.poster_path : posterPlaceholder
				}
			/>
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
