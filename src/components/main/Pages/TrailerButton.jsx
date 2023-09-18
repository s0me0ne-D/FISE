import { URL } from "../../../store/URL_SORE";

export const TrailerButton = ({ trailerKeyUrl }) => {
	return (
		<a
			href={URL.YOUTUBE_TRAILER + trailerKeyUrl.key}
			target="_blank"
			rel="noreferrer"
			className="trailer-btn"
		>
			Trailer
		</a>
	);
};
