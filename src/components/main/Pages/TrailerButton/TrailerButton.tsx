import { URL } from '../../../../store/URL_SORE';
import './trailerButton.scss';

export const TrailerButton = ({
	trailerKeyUrl,
	isInFavoritesList,
}: {
	trailerKeyUrl: string;
	isInFavoritesList?: boolean;
}) => {
	return (
		<a
			onClick={(event) => event.stopPropagation()}
			href={URL.YOUTUBE_TRAILER + trailerKeyUrl}
			target='_blank'
			rel='noreferrer'
			className={`trailer-btn ${isInFavoritesList ? 'inFavorites' : ''}`}
		>
			Trailer
		</a>
	);
};
