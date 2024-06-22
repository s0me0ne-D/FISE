import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { URL } from '../store/URL_SORE';
import { configuration } from '../configuration';
import { Media, MediaDetails } from '../interfaces/media_interface';
import { QueryParams } from '../interfaces/queryParams_interface';
import { Trailers } from '../interfaces/trailers_interface';
import { ApiResult } from '../interfaces/api_results';

export const mediaApi = createApi({
	reducerPath: 'mediaApi',
	baseQuery: fetchBaseQuery({
		baseUrl: URL.BASE_URL,
		prepareHeaders(headers) {
			headers.set('Accept', 'application/json');
			headers.set('Authorization', `${configuration.apiAuthorizationToken}`);
		},
	}),
	endpoints: (builder) => ({
		getAllTrandings: builder.query<Media[], string>({
			query: () => 'trending/all/day?language=en-US',
			transformResponse: (response: ApiResult<Media>) => response.results,
		}),
		getByCategory: builder.query<ApiResult<Media>, QueryParams>({
			query: ({ mediaType, category, pageNumber = 1 }) =>
				`${mediaType}/${category}?language=en-US&page=${pageNumber}`,
		}),
		getByGenre: builder.query<ApiResult<Media[]>, QueryParams>({
			query: ({ mediaType, pageNumber = 1, genreId, sortBy, filterByReleaseYear }) =>
				`discover/${mediaType}?include_adult=false&include_video=false&language=en-US&page=${pageNumber}&sort_by=${sortBy}${
					filterByReleaseYear && `&${filterByReleaseYear}`
				}&with_genres=${genreId}`,
		}),
		getDetails: builder.query<MediaDetails, QueryParams>({
			query: ({ mediaType, id }) => `${mediaType}/${id}`,
		}),
		getTrailersList: builder.query<Trailers, QueryParams>({
			query: ({ mediaType, id }) => `${mediaType}/${id}/videos?language=en-US`,
		}),
		getSearch: builder.query<ApiResult<Media[]>, QueryParams>({
			query: ({ searchValue, currentPage }) =>
				`search/multi?query=${searchValue}&include_adult=false&language=en-US&page=${currentPage}`,
		}),
	}),
});

export const {
	useGetAllTrandingsQuery,
	useGetByCategoryQuery,
	useGetByGenreQuery,
	useGetDetailsQuery,
	useGetTrailersListQuery,
	useGetSearchQuery,
} = mediaApi;
