import React from 'react';
import './burgerMenu.scss';

interface BurgerMenuProps {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
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
