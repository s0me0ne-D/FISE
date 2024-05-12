import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../store/URL_SORE";

export const mediaApi = createApi({
	reducerPath: "mediaApi",
	baseQuery: fetchBaseQuery({
		baseUrl: URL.BASE_URL,
		prepareHeaders(headers) {
			headers.set("Accept", "application/json");
			headers.set("Authorization", `${process.env.REACT_APP_AUTHORIZATION_TOKEN}`);
		},
	}),
	endpoints: (builder) => ({
		getAllTrandings: builder.query({
			query: () => "trending/all/day?language=en-US",
			transformResponse: (response) => response.results,
		}),
		getCategprie: builder.query({
			query: ({ mediaType, category, pageNumber = 1 }) =>
				`${mediaType}/${category}?language=en-US&page=${pageNumber}`,
			transformResponse: (response) => response.results,
		}),
	}),
});

export const { useGetAllTrandingsQuery, useGetCategprieQuery } = mediaApi;
