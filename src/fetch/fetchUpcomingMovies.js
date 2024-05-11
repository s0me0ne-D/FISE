export const fetchUpcomingMovies = (media_type, pageNumber = 1) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};

	const upcomingMovies = fetch(
		`https://api.themoviedb.org/3/${media_type}/upcoming?language=en-US&page=${pageNumber}`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));

	return upcomingMovies;
};
