import React from 'react';
import { genresTV } from '../../../../store/genres/genresTV';
import { genresMovies } from '../../../../store/genres/genresMovies';

import { NavLink } from 'react-router-dom';

interface GenresProps {
	currentLink: string;
	onClick: () => void;
}

export const Genres = ({ currentLink, onClick }: GenresProps) => {
	const genres = currentLink === 'MOVIES' ? genresMovies : genresTV;
	const link = `${currentLink === 'MOVIES' ? 'movie' : 'tv'}/genre/`;

	return (
		<div className='header-genres-menu'>
			{genres.map((genre) => {
				const genreId = genre.name.toLowerCase() + '=' + genre.id;
				return (
					<NavLink
						to={link + genreId}
						className='genres-menu-genre'
						key={genre.id}
						onClick={onClick}
					>
						{genre.name}
					</NavLink>
				);
			})}
		</div>
	);
};
