import { genresMovies } from '../../../store/genres/genresMovies';
import { NavLink } from 'react-router-dom';

export const MoviesGenres = () => {
	return genresMovies.map((genre) => {
		const genreUrl = genre.name.toLowerCase() + '=' + genre.id;
		return (
			<NavLink to={'movie/genre/' + genreUrl} className='genres-menu-genre' key={genre.id}>
				{genre.name}
			</NavLink>
		);
	});
};
