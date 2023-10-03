import haveNotPoster from "../../../images/haveNotPoster.png";
import { useState } from "react";
import Loader from "../../Loader";
import { URL } from "../../../store/URL_SORE";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const DetailsPagePoster = ({ details }) => {
	const [loading, setLoading] = useState(true);

	return (
		<LazyLoadImage
			effect="black-and-white"
			src={details.poster_path ? URL.ORIGINAL_IMG_URL + details.poster_path : haveNotPoster}
			className={`details-poster ${!details.poster_path && "have-not"} `}
			placeholderSrc={
				details.poster_path ? URL.LAZY_LOAD_IMG_URL + details.poster_path : haveNotPoster
			}
		/>
	);
};
