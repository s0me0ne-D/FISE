import { genresMovies } from "../../../../json/genresMovies";
import { NavLink } from "react-router-dom";

export const MoviesGenres = () => {
	return genresMovies.map((genre) => {
		const genreId = genre.name.toLowerCase() + "=" + genre.id;
		return (
			<NavLink to={"movie/genre/" + genreId} className="genres-menu-genre" key={genre.id}>
				{genre.name}
			</NavLink>
		);
	});
};
