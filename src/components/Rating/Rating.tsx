import React from 'react';
import { RatingIcon } from '../../assets/icons/RatingIcon';
import './rating.scss';

export const Rating = ({ rating, isInFavorites }: { rating: number; isInFavorites?: boolean }) => {
	return (
		<div className={`rating ${isInFavorites ? 'inFavorites' : ''}`}>
			<span>Rating:</span>
			<div>
				<span className='rating_value'>{rating.toFixed(1)}</span>
				<RatingIcon />
			</div>
		</div>
	);
};
