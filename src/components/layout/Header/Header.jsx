import { NavLink } from "react-router-dom";
import { Logo } from "../../../images/Logo";
import "./header.scss";
import { Search } from "./Search";
import { MediaType } from "./MediaType";

const mediaTypes = ["MOVIES", "TV-SHOWS"];

export const Header = () => {
	return (
		<header className="header">
			<div className="header-wrapper">
				<NavLink to={"/"} className="header-logo">
					<Logo />
				</NavLink>
				<nav>
					<ul className="header-nav-list">
						<li className={`header-link`}>
							<NavLink to={"/"}>
								<span>HOME</span>
							</NavLink>
						</li>
						{mediaTypes.map((mediaType) => (
							<MediaType mediaType={mediaType} key={mediaType} />
						))}
					</ul>
				</nav>
			</div>
			<Search />
		</header>
	);
};
