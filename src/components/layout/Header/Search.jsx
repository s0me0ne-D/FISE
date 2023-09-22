import { NavLink } from "react-router-dom";
import { SearchImg } from "../../../images/icons/SearchImg";
import { useEffect, useState } from "react";
import { fetchSearch } from "../../../fetch/fetchSearch";
import "./search.scss";
import { URL } from "../../../store/URL_SORE";

export const Search = () => {
	const [searchVisible, setSearchVisible] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	useEffect(() => {
		if (searchValue.length > 1) {
			const timeoutId = setTimeout(() => {
				fetchSearch(searchValue, 1).then((results) => setSearchResults(results.results));
			}, 1000);
			return () => clearTimeout(timeoutId);
		}
	}, [searchValue]);
	const changeSearchValue = (event) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		document.querySelector("body").addEventListener("click", () => {
			setSearchVisible(false);
			setSearchValue("");
			setSearchResults([]);
		});
	}, []);
	return (
		<div className="hesder-search-menu">
			<div className="header-search-wrapper">
				<SearchImg
					onClick={(event) => {
						setSearchVisible((prev) => !prev);
						event.stopPropagation();
					}}
				/>{" "}
				<input
					type="search"
					value={searchValue}
					onClick={(event) => event.stopPropagation()}
					onChange={changeSearchValue}
					className={searchVisible ? "header-search active" : "header-search"}
					placeholder="Search"
				></input>
			</div>
			<div className="header-search-results">
				{searchResults.length > 0 ? (
					<div className="search-results">
						<div className="search-results-title">
							<NavLink to={`/search/${searchValue}`}>All results</NavLink>
						</div>
						<ul className="rearch-results-main">
							{searchResults.map((movie, index) => {
								if (index < 4) {
									return (
										<NavLink
											to={`/${movie.media_type === "movie" ? "movie" : "tv"}/id/${movie.id}`}
											key={index}
										>
											<img src={URL.ORIGINAL_IMG_URL + movie.poster_path} alt="poster" />
											<div className="result-description">
												<span className="result-title">
													{" "}
													{movie.name ? movie.name : movie.title}
												</span>
												<span className="result-date">
													{movie.first_air_date ? movie.first_air_date : movie.release_date}
												</span>
											</div>
										</NavLink>
									);
								} else return null;
							})}
							<li>...</li>
						</ul>
					</div>
				) : null}
			</div>
		</div>
	);
};
