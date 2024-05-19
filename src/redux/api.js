import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from '../store/URL_SORE';

export const mediaApi = createApi({
	reducerPath: 'mediaApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL.BASE_URL,
		prepareHeaders(headers) {
			headers.set('Accept', 'application/json');
			headers.set('Authorization', `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`);
		},
	}),
	endpoints: (builder) => ({
		getAllTrandings: builder.query({
			query: () => 'trending/all/day?language=en-US',
			transformResponse: (response) => response.results,
		}),
		getCategory: builder.query({
			query: ({ mediaType, category, pageNumber = 1 }) =>
				`${mediaType}/${category}?language=en-US&page=${pageNumber}`,
		}),
		getByGenre: builder.query({
			query: ({ mediaType, pageNumber = 1, genreId }) =>
				`discover/${mediaType}?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=popularity.desc&with_genres=${genreId}`,
		}),
		getDetails: builder.query({
			query: ({ mediaType, id }) => `${mediaType}/${id}`,
		}),
		getTrailersList: builder.query({
			query: ({ mediaType, id }) => `${mediaType}/${id}/videos?language=en-US`,
		}),
		getSearch: builder.query({
			query: ({ searchValue, currentPage }) =>
				`search/multi?query=${searchValue}&include_adult=false&language=en-US&page=${currentPage}`,
		}),
	}),
});

export const {
	useGetAllTrandingsQuery,
	useGetCategoryQuery,
	useGetByGenreQuery,
	useGetDetailsQuery,
	useGetTrailersListQuery,
	useGetSearchQuery,
} = mediaApi;
