export const fetchTrailerId = (type, id) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};

	const trailersList = fetch(
		`https://api.themoviedb.org/3/${type}/${id}/videos?language=en-US`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return trailersList;
};
