import { ApiResult } from '../interfaces/api_results';
import { Media } from '../interfaces/media_interface';

export const fetchSearch = (searchValue: string, pageNumber: number = 1) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};

	const searchResults: Promise<ApiResult<Media[]>> = fetch(
		`https://api.themoviedb.org/3/search/multi?query=${searchValue}&include_adult=false&language=en-US&page=${pageNumber}`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return searchResults;
};
