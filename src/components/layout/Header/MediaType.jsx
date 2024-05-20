import React, { useState } from 'react';
import { ArrowDropDown } from '../../../images/icons/ArrowDropDown';
import { Genres } from './genres/Genres';

export const MediaType = ({ mediaType }) => {
	const [showGenres, setShowGenres] = useState(false);
	const closeGenres = () => setShowGenres(false);
	return (
		<li
			className={`header-link ${showGenres ? 'active' : ''}`}
			onMouseEnter={() => setShowGenres(true)}
			onMouseLeave={() => setShowGenres(false)}
		>
			<span>
				{mediaType}
				<ArrowDropDown />
			</span>

			{showGenres && <Genres currentLink={mediaType} onClick={closeGenres} />}
		</li>
	);
};
