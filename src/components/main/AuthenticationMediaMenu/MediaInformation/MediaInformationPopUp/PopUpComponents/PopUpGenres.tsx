import React from 'react';
import { Genre } from '../../../../../../interfaces/media_interface';

export const PopUpGenres = ({ genres }: { genres: Genre[] }) => {
	return (
		<div className='information-popup_genres'>
			<span>Genres:</span>
			{genres.map((genre) => (
				<span key={genre.id}>{genre.name}</span>
			))}
		</div>
	);
};
