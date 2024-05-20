import React from 'react';
import { genresTV } from '../../../../json/genresTV';
import { genresMovies } from '../../../../json/genresMovies';

import { NavLink } from 'react-router-dom';

export const Genres = ({ currentLink, onClick }) => {
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
