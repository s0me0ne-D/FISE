import { LazyLoadImage } from "react-lazy-load-image-component";
import { URL } from "../../../store/URL_SORE";
import haveNotPoster from "../../../images/haveNotPoster.png";
export const PagePoster = ({ media }) => {
	return (
		<>
			<LazyLoadImage
				src={media.poster_path ? URL.ORIGINAL_IMG_URL + media.poster_path : haveNotPoster}
				className={media.poster_path ? "poster" : "poster have-not"}
				placeholderSrc={
					media.poster_path ? URL.LAZY_LOAD_IMG_URL + media.poster_path : haveNotPoster
				}
			/>
		</>
	);
};
