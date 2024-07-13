import React from 'react';
import { RatingIcon } from '../../../../../../assets/icons/RatingIcon';

export const PopUpRating = ({ rating }: { rating: number }) => {
	return (
		<div className='information-popup_rating'>
			<span>Rating:</span>
			<div>
				<span className='information-popup_rating_value'>{rating.toFixed(1)}</span>
				<RatingIcon />
			</div>
		</div>
	);
};
