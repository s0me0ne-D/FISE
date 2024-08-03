import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Media } from '../interfaces/media_interface';

interface InitialState {
	mail: string;
	favorites: Media[];
}

// const loadStateFromLocalStorage = (): InitialState | null => {
// 	try {
// 		const serializedState = localStorage.getItem('favoritesMedia');
// 		if (serializedState === null) {
// 			return null;
// 		}
// 		return JSON.parse(serializedState);
// 	} catch (error) {
// 		console.error('Could not load state from localStorage', error);
// 		return null;
// 	}
// };
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
	},
});

export const favoritesMediaReducer = favoritesMediaSlice.reducer;
export const { addFavorite, deleteFromFavorites, changeMail } = favoritesMediaSlice.actions;
