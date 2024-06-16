import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesMediaSlice = createSlice({
	name: 'favoritesMedia',
	initialState,
	reducers: {},
});

export const favoritesMediaReducer = favoritesMediaSlice.reducer;
