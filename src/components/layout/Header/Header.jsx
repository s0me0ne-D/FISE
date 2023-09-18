import { NavLink } from "react-router-dom";
import { Logo } from "../../../images/Logo";
import "./header.scss";
import { SearchImg } from "../../../images/icons/SearchImg";
import { useEffect, useState } from "react";
import { MoviesGenres } from "./MoviesGenres";
import { TvGentres } from "./TvGenres";
import { ArrowDropDown } from "../../../images/icons/ArrowDropDown";
export const Header = () => {
	const [searchVisible, setSearchVisible] = useState(false);
	const [currentLink, setCurrentLink] = useState("");
	const [notActiveLink, setNotActiveLink] = useState("");
	useEffect(() => {
		if (currentLink !== "") {
			setNotActiveLink("opacity");
		}
	}, [currentLink]);
	const getCurrentLink = (event) => {
		if (currentLink !== event.target.textContent) {
			setCurrentLink(event.target.textContent);
		} else {
			setCurrentLink("");
			setNotActiveLink("");
		}
		event.stopPropagation();
	};
	useEffect(
		() =>
			document.querySelector("body").addEventListener("click", () => {
				setCurrentLink("");
				setNotActiveLink("");
			}),
		[]
	);

	const whatGenresShow = () => {
		if (currentLink === "MOVIES") {
			return <MoviesGenres />;
		} else if (currentLink === "TV-SHOWS") {
			return <TvGentres />;
		} else {
			return null;
		}
	};
	return (
		<header className="header">
			<div className="header-wrapper">
				<NavLink to={"/"} className="header-logo">
					<Logo />
				</NavLink>
				<nav>
					<ul className="header-nav-list">
						<li className={`header-link ${currentLink === "MOVIES" ? "active" : notActiveLink}`}>
							<NavLink to={"/"}>HOME</NavLink>{" "}
						</li>

						<li
							className={`header-link ${currentLink === "MOVIES" ? "active" : notActiveLink}`}
							onClick={getCurrentLink}
						>
							MOVIES
							<ArrowDropDown />
						</li>
						<li
							className={`header-link ${currentLink === "TV-SHOWS" ? "active" : notActiveLink}`}
							onClick={getCurrentLink}
						>
							TV-SHOWS
							<ArrowDropDown />
						</li>
					</ul>
				</nav>
			</div>
			<div className="header-search-wrapper">
				<SearchImg onClick={() => setSearchVisible((prev) => !prev)} />{" "}
				<input
					type="search"
					className={searchVisible ? "header-search active" : "header-search"}
					placeholder="Search"
				></input>
			</div>
			{currentLink !== "" ? <div className="header-genres-menu">{whatGenresShow()}</div> : null}
		</header>
	);
};
