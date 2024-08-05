import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import './authSection.scss';
import { UserSettingsMenu } from './UserSettingsMenu';
import { LogIn } from './LogIn';
import { useDispatch } from 'react-redux';
import { addFavoritesFromLocalStorage, changeMail } from '../../../../redux/favoritesMediaSlice';
import { Media } from '../../../../interfaces/media_interface';

export const AuthSection = () => {
	const { isAuthenticated, user } = useAuth0();
	const dispatch = useDispatch();
	useEffect(() => {
		user && dispatch(changeMail(user.email));
		user?.email && getFavoritesListFromLocalStorage(user.email);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const getFavoritesListFromLocalStorage = (key: string) => {
		try {
			const serializedState = localStorage.getItem(key);
			if (serializedState === null) {
				return null;
			}
			const favoritesList: Media[] = JSON.parse(serializedState);
			dispatch(addFavoritesFromLocalStorage(favoritesList));
		} catch (error) {
			console.error('Could not load state from localStorage', error);
			return null;
		}
	};

	return (
		<div className='profile'>{isAuthenticated && user ? <UserSettingsMenu /> : <LogIn />}</div>
	);
};
