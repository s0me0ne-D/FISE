import { NavLink } from 'react-router-dom';
import { Logo } from '../../../assets/Logo';
import './header.scss';
import { Search } from './Search/Search';
import { MediaType } from './MediaType';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useState } from 'react';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { AuthSection } from './Authentication/AuthSection';

const mediaCategories = ['MOVIES', 'TV-SHOWS'];

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
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
						{mediaCategories.map((mediaCategory) => (
							<MediaType mediaCategory={mediaCategory} key={mediaCategory} closeMenu={closeMenu} />
						))}
					</ul>
				</nav>
			</div>
			<div className='header_menu'>
				<Search />
				<AuthSection />
			</div>
		</header>
	);
};
