import { useState } from "react";
import haveNotPoster from "../../images/haveNotPoster.png";
import { NavLink } from "react-router-dom";
import { URL } from "../../store/URL_SORE";
import Loader from "../Loader";

export const MainCategorieMediaPoster = ({ media_type, media }) => {
	const [loading, setLoading] = useState(true);
	return (
		<NavLink className="categorie-movie" to={`/${media_type}/id/${media.id}`}>
			<img
				onLoad={() => setLoading(false)}
				src={media.poster_path ? URL.ORIGINAL_IMG_URL + media.poster_path : haveNotPoster}
				alt="poster"
				className={`categorie-movie-poster ${!media.poster_path && "have-not"} ${
					loading && "loading"
				} `}
				title={media.name ? media.name : media.title}
			/>
			{loading && <Loader className={"categorie-movie-poster"} />}
		</NavLink>
	);
};
