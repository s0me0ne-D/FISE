import { configureStore } from '@reduxjs/toolkit';
import { mediaApi } from './api';
import { popUpReducer } from './popUpSlice';
import { favoritesMediaReducer } from './favoritesMediaSlice';

export const store = configureStore({
	reducer: { [mediaApi.reducerPath]: mediaApi.reducer, popUpReducer, favoritesMediaReducer },
	middleware: (gDM) => gDM().concat(mediaApi.middleware),
});
