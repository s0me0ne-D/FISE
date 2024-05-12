import { URL } from "../../store/URL_SORE";
import "./main.scss";
import { Title } from "./titlePage/Title";
import { useEffect, useState } from "react";
import { TitleSlider } from "./titlePage/TitleSlider";
import { MainCategorie } from "./MainCategorie";
import { useGetAllTrandingsQuery } from "../../redux/api";

const categories = [
	{
		category: "popular",
		title: "Movies",
		mediaType: "movie",
	},
	{
		category: "popular",
		title: "TV Shows",
		mediaType: "tv",
	},
	{
		category: "top_rated",
		title: "Movies",
		mediaType: "movie",
	},
	{
		category: "top_rated",
		title: "TV Shows",
		mediaType: "tv",
	},
	{
		category: "upcoming",
		title: "Movies",
		mediaType: "movie",
	},
];

export const MainPage = () => {
	const { data } = useGetAllTrandingsQuery();
	const { ORIGINAL_IMG_URL } = URL;
	const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
	useEffect(() => {
		const timeoutId = setTimeout(
			() =>
				currentMovieIndex < 19
					? setCurrentMovieIndex(currentMovieIndex + 1)
					: setCurrentMovieIndex(0),
			10000
		);
		return () => clearTimeout(timeoutId);
	}, [currentMovieIndex]);

	return (
		data && (
			<main className="main">
				<div className="main-title">
					<Title allTranding={data} currentMovieIndex={currentMovieIndex} />
					<TitleSlider allTranding={data} currentMovieIndex={currentMovieIndex} />
					<img
						src={ORIGINAL_IMG_URL + data[currentMovieIndex].backdrop_path}
						alt="title-img"
						className="title-background"
					/>
				</div>
				<div className="main-list">
					{categories.map((category) => (
						<MainCategorie
							category={category.category}
							mediaType={category.mediaType}
							title={category.title}
							key={category.category + category.mediaType}
						/>
					))}
				</div>
			</main>
		)
	);
};
