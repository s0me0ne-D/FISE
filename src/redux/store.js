import { configureStore } from "@reduxjs/toolkit";
import { mediaApi } from "./api";

export const store = configureStore({
	reducer: { [mediaApi.reducerPath]: mediaApi.reducer },
	middleware: (gDM) => gDM().concat(mediaApi.middleware),
});
