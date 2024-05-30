import { NavLink } from 'react-router-dom';
import { Logo } from '../../../images/Logo';
import './header.scss';
import { Search } from './Search';
import { MediaType } from './MediaType';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

const mediaTypes = ['MOVIES', 'TV-SHOWS'];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);

	const menuRef = useOutsideClick(closeMenu);

	return (
		<header className='header'>
			<NavLink to={'/'} className='header-logo'>
				<Logo />
			</NavLink>
			<div ref={menuRef}>
				<BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
				<nav className={`navigation ${isOpen ? 'active-nav' : ''}`}>
					<ul className='header-nav-list'>
						<li className={`header-link home`}>
							<NavLink to={'/'}>
								<span>HOME</span>
							</NavLink>
						</li>
						{mediaTypes.map((mediaType) => (
							<MediaType mediaType={mediaType} key={mediaType} closeMenu={closeMenu} />
						))}
					</ul>
				</nav>
			</div>
			<Search />
		</header>
	);
};
