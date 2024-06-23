import React, { useEffect, useState } from 'react';
import { SortOption } from './SortOption';
import { ArrowDropDown } from '../../../../../assets/icons/ArrowDropDown';
import './sort.scss';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { MediaType } from '../../../../../interfaces/media_interface';
import { QueryParams } from '../../../../../interfaces/queryParams_interface';

interface SortProps {
	setQueryParams: React.Dispatch<React.SetStateAction<QueryParams>>;
	mediaType: MediaType;
}

interface Option {
	title: 'Popularity' | 'Release' | 'Average';
	direction: 'desc' | 'asc';
	query: string;
}

export const Sort = ({ setQueryParams, mediaType }: SortProps) => {
	const sortOptions: Option[] = [
		{ title: 'Popularity', direction: 'desc', query: `popularity.desc` },
		{ title: 'Popularity', direction: 'asc', query: `popularity.asc` },
		{
			title: 'Release',
			direction: 'desc',
			query: mediaType === 'movie' ? 'primary_release_date.desc' : 'first_air_date.desc',
		},
		{
			title: 'Release',
			direction: 'asc',
			query: mediaType === 'movie' ? 'primary_release_date.asc' : 'first_air_date.asc',
		},
		{ title: 'Average', direction: 'desc', query: 'vote_average.desc' },
		{ title: 'Average', direction: 'asc', query: 'vote_average.asc' },
	];

	const [sortBy, setSortBy] = useState(sortOptions[0]);
	const [showSortOptions, setShowSortOptions] = useState(false);

	const sortRef = useOutsideClick(() => setShowSortOptions(false));

	const handleOnClickOption = (option: Option) => {
		setSortBy(option);
		setShowSortOptions(false);
	};

	useEffect(() => {
		setQueryParams((prev) => ({
			...prev,
			sortBy: sortBy.query,
		}));
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
