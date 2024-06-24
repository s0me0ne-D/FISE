import React, { useState } from 'react';
import { ArrowDropDown } from '../../../assets/icons/ArrowDropDown';
import { Genres } from './Genres/Genres';

interface MediaTypeProps {
	mediaCategory: string;
	closeMenu: () => void;
}

export const MediaCategory = ({ mediaCategory, closeMenu }: MediaTypeProps) => {
	const [showGenres, setShowGenres] = useState<boolean>(false);
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
