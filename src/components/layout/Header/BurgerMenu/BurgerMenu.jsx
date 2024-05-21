import React from 'react';
import './burgerMenu.scss';

export const BurgerMenu = ({ isOpen, setIsOpen }) => {
	const handleOnClick = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<button className={`burger ${isOpen ? 'open' : ''}`} onClick={handleOnClick}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};
