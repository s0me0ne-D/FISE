import { NavLink } from "react-router-dom";
import { genresTV } from "../../../json/genresTV";

export const TvGentres = () =>
	genresTV.map((genre) => {
		const genreId = genre.name.toLowerCase() + "=" + genre.id;

		return (
			<NavLink to={"tv/genre/" + genreId} className="genres-menu-genre" key={genre.id}>
				{genre.name}
			</NavLink>
		);
	});
