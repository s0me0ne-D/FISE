import React, { useEffect, useState } from 'react';
import { SortOption } from './SortOption';
import { ArrowDropDown } from '../../../../../images/icons/ArrowDropDown';
import './sort.scss';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

const sortOptions = [
	{ title: 'Popularity', direction: 'desc', query: `popularity.desc` },
	{ title: 'Popularity', direction: 'asc', query: `popularity.asc` },
	{ title: 'Release', direction: 'desc', query: 'primary_release_date.desc' },
	{ title: 'Release', direction: 'asc', query: 'primary_release_date.asc' },
	{ title: 'Average', direction: 'desc', query: 'vote_average.desc' },
	{ title: 'Average', direction: 'asc', query: 'vote_average.asc' },
];

export const Sort = ({ setQueryParams }) => {
	const [sortBy, setSortBy] = useState(sortOptions[0]);
	const [showSortOptions, setShowSortOptions] = useState(false);

	const sortRef = useOutsideClick(() => setShowSortOptions(false));

	const handleOnClickOption = (option) => {
		setSortBy(option);
		setShowSortOptions(false);
	};

	useEffect(() => {
		setQueryParams((prev) => ({
			...prev,
			sortBy: sortBy.query,
		}));
	}, [sortBy]);
	return (
		<div className='sort' ref={sortRef}>
			<span className='sort_title'>Sort by:</span>
			<button className='sort_current-option' onClick={() => setShowSortOptions((prev) => !prev)}>
				<SortOption option={sortBy} />
				<div className='sort_drop-down'>
					<ArrowDropDown />
				</div>
			</button>
			{showSortOptions && (
				<div className='sort_options-menu'>
					{sortOptions.map((option) => (
						<button
							className='option-button'
							onClick={() => handleOnClickOption(option)}
							key={option.title + option.direction}
						>
							<SortOption option={option} />
						</button>
					))}
				</div>
			)}
		</div>
	);
};
