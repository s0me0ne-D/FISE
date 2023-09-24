export const fetchAllTranding = () => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`,
		},
	};

	const allTranding = fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", options)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return allTranding;
};
