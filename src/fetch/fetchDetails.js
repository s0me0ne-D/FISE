import { URL } from "../store/URL_SORE";

export const fetchDetails = (type, id) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};
	const movieDetails = fetch(URL.MOVIE_DETAILS(type, id), options)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return movieDetails;
};
