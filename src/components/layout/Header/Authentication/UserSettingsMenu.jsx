import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import './userSettingsMenu.scss';
import { UserMenu } from './UserMenu/UserMenu';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

export const UserSettingsMenu = () => {
	const { user } = useAuth0();
	const [showUserMenu, setShowUserMenu] = useState(false);

	const userSettingsRef = useOutsideClick(() => setShowUserMenu(false));

	const handleOnClick = () => setShowUserMenu(false);

	return (
		<div ref={userSettingsRef} className='user-settings'>
			<button className='user-settings_btn' onClick={() => setShowUserMenu((prev) => !prev)}>
				<img src={user.picture} alt='user' />
			</button>
			<UserMenu isShow={showUserMenu} onClick={handleOnClick} />
		</div>
	);
};
