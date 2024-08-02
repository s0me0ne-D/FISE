import React from 'react';
import './userMenu.scss';
import { NavLink } from 'react-router-dom';
import { ProfileIcon } from '../../../../../assets/icons/ProfileIcon';
import { useDispatch } from 'react-redux';
import { setShowPopUp } from '../../../../../redux/popUpSlice';
import { FavoritesIcon } from '../../../../../assets/icons/FavoritesIcon';

interface UserMenuProps {
	isShow: boolean;
	closeUserMenu: () => void;
}

type Option = {
	icon: React.ReactElement;
	title: string;
	path: string;
};
type UserMenuList = Array<Option>;

const userMenuList: UserMenuList = [
	{ icon: <ProfileIcon />, title: 'Your profile', path: '/profile' },
	{ icon: <FavoritesIcon />, title: 'Favorites', path: '/favorites' },
];

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
			<div>
				{userMenuList.map((option) => (
					<NavLink
						to={option.path}
						className={'user-menu_option'}
						onClick={closeUserMenu}
						key={option.path}
					>
						{option.icon}
						<span>{option.title}</span>
					</NavLink>
				))}
			</div>
			<span className='user-menu_line' />
			<button className='user-menu_log-out' onClick={handleOnClick}>
				Log out
			</button>
		</div>
	);
};
