export const fetchPopular = (medis_type, pageNumber) => {
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTgwYTQ0MjdkNmQ4NzZiODk3NjA2YzI4ZjNhN2U2OSIsInN1YiI6IjY0Zjg1NGM3ZmZjOWRlMDEzOGVhOTcyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7CtcHAl6b_lykhoygrSnIDBtqutUO8c6Migluy-AnnY",
		},
	};
	const popularFilms = fetch(
		`https://api.themoviedb.org/3/${medis_type}/popular?language=en-US&page=${pageNumber}`,
		options
	)
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return popularFilms;
};
