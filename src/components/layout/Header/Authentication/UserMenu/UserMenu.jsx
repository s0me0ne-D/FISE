import React from 'react';
import './userMenu.scss';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from '../../../../../images/icons/ProfileIcon';
import { useAuth0 } from '@auth0/auth0-react';

export const UserMenu = ({ isShow, onClick }) => {
	const { logout } = useAuth0();

	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
			},
		});
	};

	return (
		<div className={`user-menu ${isShow ? 'active-user-menu' : ''}`}>
			<NavLink to={'/'} className={'user-menu_option '} onClick={onClick}>
				<ProfileIcon />
				<span>Your profile</span>
			</NavLink>
			<span className='user-menu_line' />
			<button className='user-menu_log-out' onClick={handleLogout}>
				Log out
			</button>
		</div>
	);
};
