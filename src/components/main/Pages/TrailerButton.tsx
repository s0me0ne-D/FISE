import { URL } from '../../../store/URL_SORE';

export const TrailerButton = ({ trailerKeyUrl }: { trailerKeyUrl: string }) => {
	return (
		<a
			href={URL.YOUTUBE_TRAILER + trailerKeyUrl}
			target='_blank'
			rel='noreferrer'
			className='trailer-btn'
		>
			Trailer
		</a>
	);
};
