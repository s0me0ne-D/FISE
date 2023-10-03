export const URL = {
	BASE_URL: "https://api.themoviedb.org/3/",
	ORIGINAL_IMG_URL: "https://image.tmdb.org/t/p/original/",
	LAZY_LOAD_IMG_URL: "https://image.tmdb.org/t/p/w200/",
	FIND_TRAILER_KEY_URL: function (movieId) {
		return this.BASE_URL + "/movie/" + movieId + "/videos?language=en-US";
	},
	YOUTUBE_TRAILER: "https://www.youtube.com/watch?v=",
	MOVIE_DETAILS: function (type, id) {
		return this.BASE_URL + type + "/" + id;
	},
};
