export const fetchSearch = (search_value, pageNumber = 1) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};

	const searchResults = fetch(
		`https://api.themoviedb.org/3/search/multi?query=${search_value}&include_adult=false&language=en-US&page=${pageNumber}`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return searchResults;
};
