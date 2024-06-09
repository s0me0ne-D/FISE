import React from 'react';
import './popUp.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useLogOut } from '../../hooks/useLogOut';
import { initialPopUpState, setShowPopUp } from '../../redux/popUpSlice';

const popUpVariables = {
	logOut: {
		message: 'Are you sure you want to logout?',
	},
};

export const PopUp = () => {
	const { popUpType } = useSelector((store) => store.popUpReducer);
	const logout = useLogOut();

	const message = popUpVariables[popUpType].message;

	const handleOnClick = () => {
		if (popUpType === 'logOut') {
			logout();
		}
	};

	const dispatch = useDispatch();
	const closePopUp = () => {
		dispatch(setShowPopUp(initialPopUpState));
	};
	return (
		<div className='popUp'>
			<div className='popUp_container'>
				<span>{message}</span>
				<div className='popUp_buttons'>
					<button className='popUp_confirm popUp-button' onClick={handleOnClick}>
						Yes
					</button>
					<button className='popUp_denial popUp-button' onClick={closePopUp}>
						No
					</button>
				</div>
			</div>
		</div>
	);
};
