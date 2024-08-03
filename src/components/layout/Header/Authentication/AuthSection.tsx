import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import './authSection.scss';
import { UserSettingsMenu } from './UserSettingsMenu';
import { LogIn } from './LogIn';
import { useDispatch } from 'react-redux';
import { changeMail } from '../../../../redux/favoritesMediaSlice';

export const AuthSection = () => {
	const { isAuthenticated, user } = useAuth0();
	const dispatch = useDispatch();
	useEffect(() => {
		user && dispatch(changeMail(user.email));
	}, [user]);

	return (
		<div className='profile'>{isAuthenticated && user ? <UserSettingsMenu /> : <LogIn />}</div>
	);
};
