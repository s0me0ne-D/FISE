import posterPlaceholder from '../../../assets/posterPlaceholder.png';
import { MediaDetails } from '../../../interfaces/media_interface';
import { URL } from '../../../store/URL_SORE';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const DetailsPagePoster = ({ details }: { details: MediaDetails }) => {
	return (
		<LazyLoadImage
			src={details.poster_path ? URL.ORIGINAL_IMG_URL + details.poster_path : posterPlaceholder}
			className={`details-poster ${!details.poster_path && 'have-not'} `}
			placeholderSrc={
				details.poster_path ? URL.LAZY_LOAD_IMG_URL + details.poster_path : posterPlaceholder
			}
		/>
	);
};
