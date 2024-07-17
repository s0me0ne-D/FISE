import React from 'react';
import { Genre } from '../../../../../../interfaces/media_interface';

export const PopUpGenres = ({ genres }: { genres: Genre[] }) => {
	return (
		<div className='information-popup_genres'>
			<span className='information-popup_genres_title'>Genres:</span>
			<div className='information-popup_genres_container'>
				{genres.map((genre, index) => (
					<span key={genre.id}>
						{genre.name}
						{index !== genres.length - 1 && ' ,'}
					</span>
				))}
			</div>
		</div>
	);
};
