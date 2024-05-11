import { URL } from "../../store/URL_SORE";
import "./main.scss";
import { Title } from "./titlePage/Title";
import { useEffect, useState } from "react";
import { TitleSlider } from "./titlePage/TitleSlider";
import { fetchPopular } from "../../fetch/fetchPopular";
import { MainCategorie } from "./MainCategorie";
import { fetchTopRated } from "../../fetch/fetchTopRated";
import { fetchUpcomingMovies } from "../../fetch/fetchUpcomingMovies";
import { useGetAllTrandingsQuery } from "../../redux/api";

export const MainPage = () => {
	const { data } = useGetAllTrandingsQuery();
	const { ORIGINAL_IMG_URL } = URL;
	const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
	const [popularMovies, setPopularMovies] = useState(false);
	const [populatTvSeries, setPopulatTvSeries] = useState(false);
	const [topRatedMovies, setTopRatedMovies] = useState(false);
	const [topRatedTvSeries, setTopRatedTvSeries] = useState(false);
	const [upcomingMovies, setUpcomingMovies] = useState(false);
	useEffect(() => {
		fetchPopular("movie").then((response) => setPopularMovies(response.results));
		fetchPopular("tv").then((response) => setPopulatTvSeries(response.results));
		fetchTopRated("movie").then((response) => setTopRatedMovies(response.results));
		fetchTopRated("tv").then((response) => setTopRatedTvSeries(response.results));
		fetchUpcomingMovies("movie").then((response) => setUpcomingMovies(response.results));
	}, []);
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
					{popularMovies ? (
						<MainCategorie
							list={popularMovies}
							categorie={"Popular"}
							title={"Movies"}
							media_type={"movie"}
						/>
					) : null}
					{populatTvSeries ? (
						<MainCategorie
							list={populatTvSeries}
							categorie={"Popular"}
							title={"TV Shows"}
							media_type={"tv"}
						/>
					) : null}
					{topRatedMovies ? (
						<MainCategorie
							list={topRatedMovies}
							categorie={"Top Rated"}
							title={"Movies"}
							media_type={"movie"}
						/>
					) : null}
					{topRatedTvSeries ? (
						<MainCategorie
							list={topRatedTvSeries}
							categorie={"Top Rated"}
							title={"TV Shows"}
							media_type={"tv"}
						/>
					) : null}
					{upcomingMovies ? (
						<MainCategorie
							list={upcomingMovies}
							categorie={"Upcoming"}
							title={"Movies"}
							media_type={"movie"}
						/>
					) : null}
				</div>
			</main>
		)
	);
};
