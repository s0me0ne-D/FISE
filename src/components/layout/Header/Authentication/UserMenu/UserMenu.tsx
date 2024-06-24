import React from 'react';
import './userMenu.scss';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from '../../../../../assets/icons/ProfileIcon';
import { useDispatch } from 'react-redux';
import { setShowPopUp } from '../../../../../redux/popUpSlice';

interface UserMenuProps {
	isShow: boolean;
	closeUserMenu: () => void;
}

export const UserMenu = ({ isShow, closeUserMenu }: UserMenuProps) => {
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(
			setShowPopUp({
				showPopUp: true,
				popUpType: 'logOut',
			})
		);
	};

	return (
		<div className={`user-menu ${isShow ? 'active-user-menu' : ''}`}>
			<NavLink to={'/'} className={'user-menu_option '} onClick={closeUserMenu}>
				<ProfileIcon />
				<span>Your profile</span>
			</NavLink>
			<span className='user-menu_line' />
			<button className='user-menu_log-out' onClick={handleOnClick}>
				Log out
			</button>
		</div>
	);
};
