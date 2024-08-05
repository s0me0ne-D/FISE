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

const saveStateToLocalStorage = (mail: string, favorites: Media[]) => {
	try {
		const serializedFavorites = JSON.stringify(favorites);
		localStorage.setItem(mail, serializedFavorites);
	} catch (e) {
		console.error('Could not save state to localStorage', e);
	}
};

const favoritesMediaSlice = createSlice({
	name: 'favoritesMedia',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Media>) => {
			state.favorites.push(action.payload);
			saveStateToLocalStorage(state.mail, state.favorites);
		},
		deleteFromFavorites: (state, action: PayloadAction<number>) => {
			const newFavoritesList = state.favorites.filter((media) => media.id !== action.payload);
			state.favorites = newFavoritesList;
			saveStateToLocalStorage(state.mail, state.favorites);
		},
		changeMail: (state, action) => {
			state.mail = action.payload;
		},
		addFavoritesFromLocalStorage: (state, action: PayloadAction<Media[]>) => {
			state.favorites = action.payload;
		},
	},
});

export const favoritesMediaReducer = favoritesMediaSlice.reducer;
export const { addFavorite, deleteFromFavorites, changeMail, addFavoritesFromLocalStorage } =
	favoritesMediaSlice.actions;
