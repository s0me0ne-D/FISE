import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../store/URL_SORE";

export const mediaApi = createApi({
	reducerPath: "mediaApi",
	baseQuery: fetchBaseQuery({
		baseUrl: URL.BASE_URL,
	}),
	endpoints: (builder) => ({}),
});
