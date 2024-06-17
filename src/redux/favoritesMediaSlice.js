import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	mail: '',
	favorites: [],
};

const favoritesMediaSlice = createSlice({
	name: 'favoritesMedia',
	initialState,
	reducers: {
		addFavorite: (state, action) => {
			state.favorites.push(action.payload);
		},
	},
});

export const favoritesMediaReducer = favoritesMediaSlice.reducer;
export const { addFavorite } = favoritesMediaSlice.actions;
