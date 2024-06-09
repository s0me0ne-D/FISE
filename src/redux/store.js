import { configureStore } from '@reduxjs/toolkit';
import { mediaApi } from './api';
import { popUpReducer } from './popUpSlice';

export const store = configureStore({
	reducer: { [mediaApi.reducerPath]: mediaApi.reducer, popUpReducer },
	middleware: (gDM) => gDM().concat(mediaApi.middleware),
});
