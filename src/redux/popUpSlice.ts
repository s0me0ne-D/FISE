import { createSlice } from '@reduxjs/toolkit';

type PopUpType = 'logOut' | '';
interface InitialPopUpState {
	showPopUp: boolean;
	popUpType: PopUpType;
}
export const initialPopUpState: InitialPopUpState = { showPopUp: false, popUpType: '' };

export const popUpSlice = createSlice({
	name: 'popUp',
	initialState: initialPopUpState,
	reducers: {
		setShowPopUp: (state, action) => {
			state.showPopUp = action.payload.showPopUp;
			state.popUpType = action.payload.popUpType;
		},
	},
});

export const popUpReducer = popUpSlice.reducer;
export const { setShowPopUp } = popUpSlice.actions;
