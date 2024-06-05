import React, { useEffect, useState } from 'react';
import './filter.scss';
import { ArrowDropDown } from '../../../../../images/icons/ArrowDropDown';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

export const Filter = ({ title, filterOptions, filter }) => {
	const [filterBy, setFilterBy] = useState(null);
	const [showOptions, setShowOptions] = useState(false);

	const filterRef = useOutsideClick(() => setShowOptions(false));

	const handleOnClickOption = (option) => {
		setFilterBy(option);
		setShowOptions(false);
	};
	const handleOnclickAll = () => {
		setFilterBy(null);
		setShowOptions(false);
	};
	useEffect(() => {
		filterBy && filter(filterBy);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filterBy]);
	return (
		<div className='filter'>
			<span className='filter_title'>{title}:</span>
			<div ref={filterRef} className='filter_container'>
				<button className='filter_current-option' onClick={() => setShowOptions((prev) => !prev)}>
					{filterBy ? filterBy : 'All'}
					<div className='filter_current-option_drop-down'>
						<ArrowDropDown />
					</div>
				</button>

				{showOptions && (
					<div className='filter_options-menu'>
						{filterOptions.map((option) => (
							<button
								key={option}
								className='filter_option'
								onClick={() => handleOnClickOption(option)}
							>
								{option}
							</button>
						))}
						<button className='filter_option' onClick={handleOnclickAll}>
							All
						</button>
					</div>
				)}
			</div>
		</div>
	);
};
