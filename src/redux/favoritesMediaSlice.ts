import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Media } from '../interfaces/media_interface';

interface InitialState {
	mail: string;
	favorites: Media[];
}

const loadStateFromLocalStorage = (): InitialState | null => {
	try {
		const serializedState = localStorage.getItem('favoritesMedia');
		if (serializedState === null) {
			return null;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		console.error('Could not load state from localStorage', error);
		return null;
	}
};

const saveStateToLocalStorage = (state: InitialState) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('favoritesMedia', serializedState);
	} catch (e) {
		console.error('Could not save state to localStorage', e);
	}
};

const initialState: InitialState = loadStateFromLocalStorage() || {
	mail: '',
	favorites: [],
};

const favoritesMediaSlice = createSlice({
	name: 'favoritesMedia',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Media>) => {
			state.favorites.push(action.payload);
			saveStateToLocalStorage(state);
		},
		deleteFromFavorites: (state, action: PayloadAction<number>) => {
			const newFavoritesList = state.favorites.filter((media) => media.id !== action.payload);
			state.favorites = newFavoritesList;
			saveStateToLocalStorage(state);
		},
		changeMail: (state, action) => {
			state.mail = action.payload;
			saveStateToLocalStorage(state);
		},
	},
});

export const favoritesMediaReducer = favoritesMediaSlice.reducer;
export const { addFavorite, deleteFromFavorites, changeMail } = favoritesMediaSlice.actions;
