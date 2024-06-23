import { LazyLoadImage } from 'react-lazy-load-image-component';
import { URL } from '../../../store/URL_SORE';
import posterPlaceholder from '../../../assets/posterPlaceholder.png';
import { Media } from '../../../interfaces/media_interface';

export const PagePoster = ({ media }: { media: Media }) => {
	return (
		<>
			<LazyLoadImage
				src={media.poster_path ? URL.ORIGINAL_IMG_URL + media.poster_path : posterPlaceholder}
				className={`poster ${media.poster_path ? '' : 'have-not'}`}
				placeholderSrc={
					media.poster_path ? URL.LAZY_LOAD_IMG_URL + media.poster_path : posterPlaceholder
				}
			/>
		</>
	);
};
