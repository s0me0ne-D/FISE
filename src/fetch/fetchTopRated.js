export const fetchTopRated = (medis_type, pageNumber) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};

	const topRatedMovies = fetch(
		`https://api.themoviedb.org/3/${medis_type}/top_rated?language=en-US&page=${pageNumber}`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return topRatedMovies;
};
