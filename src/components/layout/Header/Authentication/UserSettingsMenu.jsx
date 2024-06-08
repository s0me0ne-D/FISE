import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import './userSettingsMenu.scss';
import { UserMenu } from './UserMenu/UserMenu';

export const UserSettingsMenu = () => {
	const { user } = useAuth0();
	const [showUserMenu, setShowUserMenu] = useState(true);

	return (
		<div className='user-settings'>
			<button className='user-settings_btn'>
				<img src={user.picture} alt='user' />
			</button>
			{showUserMenu && <UserMenu />}
		</div>
	);
};
