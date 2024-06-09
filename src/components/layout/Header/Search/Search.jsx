import { useNavigate } from 'react-router-dom';
import { SearchImg } from '../../../../assets/icons/SearchImg';
import { useEffect, useState } from 'react';
import { fetchSearch } from '../../../../fetch/fetchSearch';
import './search.scss';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { SearchResults } from './SearchResults';

export const Search = () => {
	const [searchVisible, setSearchVisible] = useState(false);
	const [searchValue, setSearchValue] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [showNoResults, setShowNoResults] = useState(false);

	const closeSearch = () => {
		setSearchVisible(false);
		setSearchValue('');
		setSearchResults([]);
	};

	const searchRef = useOutsideClick(() => closeSearch());

	const navigation = useNavigate();
	useEffect(() => {
		setSearchResults([]);
		if (searchValue.length > 1) {
			const timeoutId = setTimeout(() => {
				fetchSearch(searchValue, 1).then((response) => {
					setSearchResults(response.results);
					response.results.length === 0 && setShowNoResults(true);
				});
			}, 700);
			return () => clearTimeout(timeoutId);
		} else {
			setSearchResults([]);
		}
	}, [searchValue]);
	useEffect(() => {
		setShowNoResults(false);
	}, [searchValue]);
	const changeSearchValue = (event) => {
		setSearchValue(event.target.value);
	};
	const handleKeyPress = (event) => {
		if (searchResults) {
			if (event.key === 'Enter' && searchResults.length > 0) {
				navigation(`/search/${searchValue}`);
				setSearchVisible(false);
				setSearchValue('');
				setSearchResults([]);
			} else {
				return null;
			}
		}
	};

	return (
		<div ref={searchRef} className='hesder-search-menu'>
			<button
				className='hesder-search-btn'
				onClick={(event) => {
					setSearchVisible((prev) => !prev);
					event.stopPropagation();
				}}
			>
				<SearchImg />
			</button>
			{searchVisible && (
				<div className='header-search-wrapper'>
					<input
						type='search'
						value={searchValue}
						onClick={(event) => event.stopPropagation()}
						onChange={changeSearchValue}
						onKeyDown={handleKeyPress}
						className='search'
						placeholder='Search'
					></input>
				</div>
			)}
			<SearchResults
				closeSearch={closeSearch}
				searchResults={searchResults}
				searchValue={searchValue}
				showNoResults={showNoResults}
			/>
		</div>
	);
};
