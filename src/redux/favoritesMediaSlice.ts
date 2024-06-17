import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Media } from '../interfaces/media_interface';

interface InitialState {
	mail: string;
	favorites: Media[];
}

const initialState: InitialState = {
	mail: '',
	favorites: [],
};

const favoritesMediaSlice = createSlice({
	name: 'favoritesMedia',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Media>) => {
			state.favorites.push(action.payload);
		},
		changeMail: (state, action) => {
			state.mail = action.payload;
		},
	},
});

export const favoritesMediaReducer = favoritesMediaSlice.reducer;
export const { addFavorite, changeMail } = favoritesMediaSlice.actions;
