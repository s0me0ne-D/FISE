import React from 'react';
import './burgerMenu.scss';

export const BurgerMenu = ({ isOpen, onClick }) => {
	return (
		<button className={`burger ${isOpen ? 'open' : ''}`} onClick={onClick}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};
