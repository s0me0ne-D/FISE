import { NavLink } from 'react-router-dom';
import { Logo } from '../../../images/Logo';
import './header.scss';
import { Search } from './Search';
import { MediaType } from './MediaType';
import { BurgerMenu } from './BurgerMenu/BurgerMenu';
import { useState } from 'react';

const mediaTypes = ['MOVIES', 'TV-SHOWS'];

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOnclick = () => setIsOpen((prev) => !prev);
	return (
		<header className='header'>
			<div className='header-wrapper'>
				<NavLink to={'/'} className='header-logo'>
					<Logo />
				</NavLink>
				<BurgerMenu isOpen={isOpen} onClick={handleOnclick} />
				<nav className={isOpen ? 'active-nav' : ''}>
					<ul className='header-nav-list'>
						<li className={`header-link`}>
							<NavLink to={'/'}>
								<span>HOME</span>
							</NavLink>
						</li>
						{mediaTypes.map((mediaType) => (
							<MediaType mediaType={mediaType} key={mediaType} />
						))}
					</ul>
				</nav>
			</div>
			<Search />
		</header>
	);
};
