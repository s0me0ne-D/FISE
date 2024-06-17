import { createSlice } from '@reduxjs/toolkit';

export const initialPopUpState = { showPopUp: false, popUpType: '' };

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
