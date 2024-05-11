export const fetchPopular = (media_type, pageNumber = 1) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};
	const popularFilms = fetch(
		`https://api.themoviedb.org/3/${media_type}/popular?language=en-US&page=${pageNumber}`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return popularFilms;
};
