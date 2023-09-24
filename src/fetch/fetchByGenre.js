export const fetchByGenre = (mediaType, page, genreId) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};

	const media = fetch(
		`https://api.themoviedb.org/3/discover/${mediaType}?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return media;
};
