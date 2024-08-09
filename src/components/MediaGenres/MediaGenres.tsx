import React from 'react';
import { Genre } from '../../interfaces/media_interface';
import './mediaGenres.scss';

export const MediaGenres = ({
	genres,
	isInFavorites,
}: {
	genres: Genre[];
	isInFavorites?: boolean;
}) => {
	return (
		<div className={`media-genres ${isInFavorites ? 'inFavorites' : ''}`}>
			<span className='media-genres_title'>Genres:</span>
			<div className='media-genres_container'>
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
