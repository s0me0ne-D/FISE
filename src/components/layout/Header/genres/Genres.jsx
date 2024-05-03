import React from "react";
import { MoviesGenres } from "./MoviesGenres";
import { TvGentres } from "./TvGenres";

export const Genres = (currentLink) => {
	return (
		<div className="header-genres-menu">
			{currentLink === "MOVIES" ? <MoviesGenres /> : <TvGentres />}
		</div>
	);
};
