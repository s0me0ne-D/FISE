import React from 'react';
import { RatingIcon } from '../../../../../../assets/icons/RatingIcon';

export const PopUpRating = ({ rating }: { rating: number }) => {
	return (
		<div>
			<span>Rating:</span>
			<span>{rating.toFixed(1)}</span>
			<RatingIcon />
		</div>
	);
};
