import React from 'react';
import { NavLink } from 'react-router-dom';
import { URL } from '../../../../store/URL_SORE';
import haveNotPoster from '../../../../assets/haveNotPoster.png';
import { CubeLoader } from '../../../../assets/CubeLoader';

export const SearchResults = ({ searchResults, searchValue, closeSearch, showNoResults }) => {
	return (
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
	);
};
