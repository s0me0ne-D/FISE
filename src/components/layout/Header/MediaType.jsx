import React, { useState } from 'react';
import { ArrowDropDown } from '../../../assets/icons/ArrowDropDown';
import { Genres } from './Genres/Genres';

export const MediaType = ({ mediaCategory, closeMenu }) => {
	const [showGenres, setShowGenres] = useState(false);
	const onClick = () => {
		closeMenu();
		setShowGenres(false);
	};
	return (
		<li
			className={`header-link ${showGenres ? 'active' : ''}`}
			onMouseEnter={() => setShowGenres(true)}
			onMouseLeave={() => setShowGenres(false)}
		>
			<span>
				{mediaCategory}
				<ArrowDropDown />
			</span>

			{showGenres && <Genres currentLink={mediaCategory} onClick={onClick} />}
		</li>
	);
};
