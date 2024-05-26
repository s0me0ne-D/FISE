import { NavLink, useNavigate } from 'react-router-dom';
import { SearchImg } from '../../../images/icons/SearchImg';
import { useEffect, useState } from 'react';
import { fetchSearch } from '../../../fetch/fetchSearch';
import './search.scss';
import { URL } from '../../../store/URL_SORE';
import haveNotPoster from '../../../images/haveNotPoster.png';
import { CubeLoader } from '../../../images/CubeLoader';
import { useOutsideClick } from '../../../hooks/useOutsideClick';

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
			<div className='header-search-results'>
				{searchResults.length > 0 ? (
					<div className='search-results'>
						<div className='search-results-title'>
							<NavLink to={`/search/${searchValue}`} onClick={closeSearch}>
								All results
							</NavLink>
						</div>
						<ul className='rearch-results-main'>
							{searchResults.map((movie, index) => {
								if (index < 4) {
									if (movie.media_type !== 'person') {
										return (
											<NavLink
												to={`/${movie.media_type === 'movie' ? 'movie' : 'tv'}/id/${movie.id}`}
												key={index}
												onClick={closeSearch}
											>
												<img
													src={
														movie.poster_path
															? URL.LAZY_LOAD_IMG_URL + movie.poster_path
															: haveNotPoster
													}
													alt='poster'
													className={!movie.poster_path ? 'have-not' : null}
												/>
												<div className='result-description'>
													<span className='result-title'>
														{movie.name ? movie.name : movie.title}
													</span>
													<span className='result-date'>
														{movie.first_air_date ? movie.first_air_date : movie.release_date}
													</span>
												</div>
											</NavLink>
										);
									} else {
										return null;
									}
								} else return null;
							})}
							<li>...</li>
						</ul>
					</div>
				) : showNoResults ? (
					<div className='no-results'>No results found for "{searchValue}"</div>
				) : searchValue.length > 1 ? (
					<div className='no-results loader'>
						<CubeLoader width={'30px'} height={'30px'} />
						<span>Loading ...</span>
					</div>
				) : null}
			</div>
		</div>
	);
};
