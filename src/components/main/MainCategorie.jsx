import { NavLink } from "react-router-dom";
import "./mainCategorie.scss";
import { ArrowBack } from "../../images/icons/ArrowBack";
import { ArrowForward } from "../../images/icons/ArrowForward";
import { useEffect, useRef, useState } from "react";
import { MainCategorieMediaPoster } from "./MainCategorieMediaPoster";
import { useGetCategorieQuery } from "../../redux/api";
import { handleCategoryTitle } from "../../utils/handleCategoryTitle";

export const MainCategorie = ({ category, title, mediaType }) => {
	const categoryText = handleCategoryTitle(category);

	const { data } = useGetCategorieQuery({ mediaType, category });
	const listRef = useRef(null);
	const [scrollValue, setScrollValue] = useState(null);
	const [maxScrollValue, setMaxScrollValue] = useState(null);
	const [showForward, setShowForward] = useState(true);
	useEffect(() => {
		listRef.current !== null && setMaxScrollValue(2200 - listRef.current.offsetWidth);
	}, [listRef, data]);

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
		data && (
			<div className="main-categorie">
				<div className="categorie-title">
					<NavLink to={mediaType + "/" + category}>
						{categoryText} {title}
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
						{data.results.map((media) => (
							<MainCategorieMediaPoster media_type={mediaType} media={media} key={media.id} />
						))}
					</div>
				</div>
			</div>
		)
	);
};
