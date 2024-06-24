import React, { useState } from 'react';
import './userSettingsMenu.scss';
import { UserMenu } from './UserMenu/UserMenu';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { UserAccountFallbackImage } from './UserAccountFallbackImage';

export const UserSettingsMenu = () => {
	const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

	const userSettingsRef = useOutsideClick(() => setShowUserMenu(false));

	const closeUserMenu = () => setShowUserMenu(false);
	return (
		<div ref={userSettingsRef} className='user-settings'>
			<button className='user-settings_btn' onClick={() => setShowUserMenu((prev) => !prev)}>
				<UserAccountFallbackImage />
			</button>
			<UserMenu isShow={showUserMenu} closeUserMenu={closeUserMenu} />
		</div>
	);
};
