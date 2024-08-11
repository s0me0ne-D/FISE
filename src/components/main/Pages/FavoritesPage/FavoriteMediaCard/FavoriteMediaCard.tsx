import React, { useState } from 'react';
import './favoriteMediaCard.scss';
import { Media, MediaType } from '../../../../../interfaces/media_interface';
import { NavLink } from 'react-router-dom';
import { URL } from '../../../../../store/URL_SORE';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTrailerKeyUrl } from '../../../../../hooks/useTrailerKeyUrl';
import { TrailerButton } from '../../TrailerButton/TrailerButton';
import { DeleteFromFavorites } from '../../../AuthenticationMediaMenu/DeleteFromFavorites';
import { Rating } from '../../../../Rating/Rating';
import { useGetDetailsQuery } from '../../../../../redux/api';
import { MediaGenres } from '../../../../MediaGenres/MediaGenres';

export const FavoriteMediaCard = ({ media }: { media: Media }) => {
	const [zIndex, setZIndex] = useState<number>(9);

	const mediaType: MediaType = media.title ? 'movie' : 'tv';

	const trailerKeyUrl = useTrailerKeyUrl({ mediaType, id: media.id });

	const { data: details } = useGetDetailsQuery({ mediaType, id: media.id });
	return (
		<NavLink
			to={`/${mediaType}/id/${media.id}`}
			className='favorite-media'
			style={{ zIndex: zIndex }}
			onMouseEnter={() => setZIndex(999)}
			onMouseLeave={() => setZIndex(9)}
		>
			<div className='favorite-media_container'>
				<LazyLoadImage
					src={URL.ORIGINAL_IMG_URL + media.backdrop_path}
					className='title-background'
					placeholderSrc={URL.LAZY_LOAD_IMG_URL + media.backdrop_path}
				/>
				<div className='favorite-media_description description'>
					<div className='description_buttons'>
						{trailerKeyUrl && <TrailerButton trailerKeyUrl={trailerKeyUrl} isInFavoritesList />}
						<DeleteFromFavorites media={media} />
					</div>
					<Rating rating={media.vote_average} isInFavorites />
					{details && <MediaGenres genres={details.genres} isInFavorites />}
				</div>
			</div>
		</NavLink>
	);
};
