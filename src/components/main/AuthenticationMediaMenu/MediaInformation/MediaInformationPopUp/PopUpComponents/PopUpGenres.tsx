import React from 'react';
import { Genre } from '../../../../../../interfaces/media_interface';

export const PopUpGenres = ({ genres }: { genres: Genre[] }) => {
	return (
		<div>
			Genres:
			{genres.map((genre) => (
				<span key={genre.id}>{genre.name}</span>
			))}
		</div>
	);
};
