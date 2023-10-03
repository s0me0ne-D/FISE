import { URL } from "../../../store/URL_SORE";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../Loader";
export const TitleSliderMediaPoster = ({ movie, index, currentMovieIndex }) => {
	const { ORIGINAL_IMG_URL } = URL;
	const [loading, setLoading] = useState(true);

	return (
		<NavLink to={`/${movie.media_type}/id/${movie.id}`}>
			{" "}
			<img
				onLoad={() => setLoading(false)}
				className={`title-slider-poster ${index === currentMovieIndex ? "active" : ""} ${
					!movie.poster_path && "have-not"
				} ${loading && "loading"} `}
				src={ORIGINAL_IMG_URL + movie.poster_path}
				alt="poster"
				title={movie.name ? movie.name : movie.title}
			/>
			{loading && <Loader className={"title-slider-poster"} />}
		</NavLink>
	);
};
