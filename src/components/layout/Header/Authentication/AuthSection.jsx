import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './authSection.scss';
import { UserSettingsMenu } from './UserSettingsMenu';
import { LogIn } from './LogIn';

export const AuthSection = () => {
	const { isAuthenticated, user, logout, loginWithRedirect } = useAuth0();

	return (
		<div className='profile'>{isAuthenticated && user ? <UserSettingsMenu /> : <LogIn />}</div>
	);
};
