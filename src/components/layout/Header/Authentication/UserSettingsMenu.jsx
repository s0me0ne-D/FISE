import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import './userSettingsMenu.scss';

export const UserSettingsMenu = () => {
	const { user } = useAuth0();

	return (
		<div className='user-menu'>
			<button className='user-menu_btn'>
				<img src={user.picture} alt='user' />
			</button>
		</div>
	);
};
