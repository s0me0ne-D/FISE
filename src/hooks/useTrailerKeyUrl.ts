import { useEffect, useState } from 'react';
import { MediaType } from '../interfaces/media_interface';
import { useGetTrailersListQuery } from '../redux/api';
import { Result } from '../interfaces/trailers_interface';

interface UseTrailerKeyUrlArg {
	mediaType: MediaType;
	id: number;
}

export const useTrailerKeyUrl = ({ mediaType, id }: UseTrailerKeyUrlArg) => {
	const [trailerKeyUrl, setTrailerKeyUrl] = useState<Result | null>(null);

	const queryParams = { mediaType, id };
	const { data: trailers } = useGetTrailersListQuery(queryParams);

	useEffect(() => {
		if (trailers) {
			trailers.results.forEach((key) => {
				if (key.name.includes('Trailer')) {
					setTrailerKeyUrl(key);
				}
			});
		}
	}, [trailers]);

	if (trailerKeyUrl) return trailerKeyUrl.key;
};
