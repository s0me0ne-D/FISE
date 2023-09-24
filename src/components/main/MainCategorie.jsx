import { NavLink } from "react-router-dom";
import { URL } from "../../store/URL_SORE";
import "./mainCategorie.scss";
import { ArrowBack } from "../../images/icons/ArrowBack";
import { ArrowForward } from "../../images/icons/ArrowForward";
import { useEffect, useRef, useState } from "react";
import haveNotPoster from "../../images/haveNotPoster.png";

export const MainCategorie = ({ list, categorie, title, media_type }) => {
	const listRef = useRef();
	const [scrollValue, setScrollValue] = useState(null);
	const [maxScrollValue, setMaxScrollValue] = useState(null);
	const [showForward, setShowForward] = useState(true);
	useEffect(() => {
		setMaxScrollValue(2200 - listRef.current.offsetWidth);
	}, [list]);

	const scrollLeft = () => {
		const container = listRef.current;
		if (container) {
			const scrollAmount = 220;
			container.scrollLeft -= scrollAmount;
			setShowForward(true);

			if (container.scrollLeft < 111) {
				setScrollValue(null);
			} else {
				setScrollValue(container.scrollLeft);
			}
		}
	};
	const scrollRight = () => {
		const container = listRef.current;
		if (container) {
			const scrollAmount = 220;
			container.scrollLeft += scrollAmount;
			setScrollValue(container.scrollLeft);
			if (container.scrollLeft > maxScrollValue - 110) {
				setShowForward(false);
			}
		}
	};
	return (
		<div className="main-categorie">
			<div className="categorie-title">
				<NavLink to={media_type + "/" + categorie.toLowerCase()}>
					{categorie} {title}
				</NavLink>
			</div>
			<div className="categorie-list-container">
				{scrollValue !== null ? (
					<button className="categorie-back" onClick={scrollLeft}>
						<ArrowBack />
					</button>
				) : null}
				{showForward ? (
					<button className="categorie-forward" onClick={scrollRight}>
						<ArrowForward />
					</button>
				) : null}

				<div className="categorie-list" ref={listRef}>
					{list.map((media) => (
						<NavLink
							key={media.id}
							className="categorie-movie"
							to={`/${media_type}/id/${media.id}`}
						>
							<img
								onLoad={() => console.log("loading")}
								src={media.poster_path ? URL.ORIGINAL_IMG_URL + media.poster_path : haveNotPoster}
								alt="poster"
								className={
									media.poster_path ? "categorie-movie-poster" : "categorie-movie-poster have-not"
								}
								title={media.name ? media.name : media.title}
							/>
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};
