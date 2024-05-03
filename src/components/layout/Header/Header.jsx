import { NavLink } from "react-router-dom";
import { Logo } from "../../../images/Logo";
import "./header.scss";
import { useEffect, useState } from "react";
import { MoviesGenres } from "./MoviesGenres";
import { TvGentres } from "./TvGenres";
import { ArrowDropDown } from "../../../images/icons/ArrowDropDown";
import { Search } from "./Search";
import { Genres } from "./genres/Genres";
export const Header = () => {
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

	return (
		<header className="header">
			<div className="header-wrapper">
				<NavLink to={"/"} className="header-logo">
					<Logo />
				</NavLink>
				<nav>
					<ul className="header-nav-list">
						<li className={`header-link ${currentLink === "HOME" ? "active" : notActiveLink}`}>
							<NavLink to={"/"}>HOME</NavLink>{" "}
						</li>

						<li
							className={`header-link ${currentLink === "MOVIES" ? "active" : notActiveLink}`}
							onClick={getCurrentLink}
						>
							MOVIES
							<ArrowDropDown
								currentLink={currentLink}
								setCurrentLink={setCurrentLink}
								setNotActiveLink={setNotActiveLink}
							/>
						</li>
						<li
							className={`header-link ${currentLink === "TV-SHOWS" ? "active" : notActiveLink}`}
							onClick={getCurrentLink}
						>
							TV-SHOWS
							<ArrowDropDown
								currentLink={currentLink}
								setCurrentLink={setCurrentLink}
								setNotActiveLink={setNotActiveLink}
							/>
						</li>
					</ul>
				</nav>
			</div>
			<Search /> {currentLink !== "" && <Genres currentLink={currentLink} />}
		</header>
	);
};
