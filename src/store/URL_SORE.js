export const URL = {
	API_KEY: "&api_key=b980a4427d6d876b897606c28f3a7e69",
	BASE_URL: "https://api.themoviedb.org/3/",
	ORIGINAL_IMG_URL: "https://image.tmdb.org/t/p/original/",
	FIND_TRAILER_KEY_URL: function (movieId) {
		return this.BASE_URL + "/movie/" + movieId + "/videos?language=en-US";
	},
	YOUTUBE_TRAILER: "https://www.youtube.com/watch?v=",
	DISCOVER_URL: function () {
		return this.BASE_URL + "discover/movie?sort_by=popularity.desc" + this.API_KEY + "&page=2";
	},
	MOVIE_DETAILS: function (type, id) {
		return this.BASE_URL + type + "/" + id;
	},
};
