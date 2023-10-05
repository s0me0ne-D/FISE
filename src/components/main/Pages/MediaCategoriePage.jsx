import { useParams, NavLink } from "react-router-dom";
import { fetchPopular } from "../../../fetch/fetchPopular";
import { useEffect, useState } from "react";
import { Pagination } from "./genrePage/Pagination";
import { RatingIcon } from "../../../images/icons/RatingIcon";
import { fetchTopRated } from "../../../fetch/fetchTopRated";
import { fetchUpcomingMovies } from "../../../fetch/fetchUpcomingMovies";
import { PagePoster } from "./PagePoster";
import { CubeLoader } from "../../../images/CubeLoader";

export const MediaCategoriePage = ({ media_type }) => {
	const id = useParams();
	const categorie = id.categorieId;
	const [mediaList, setMediaList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const whichFetch = () => {
		switch (categorie) {
			case "popular":
				return fetchPopular(media_type, currentPage).then((response) => {
					setMediaList(response.results);
					setTotalPages(response.total_pages);
				});
			case "top rated":
				return fetchTopRated(media_type, currentPage).then((response) => {
					setMediaList(response.results);
					setTotalPages(response.total_pages);
				});
			case "upcoming":
				return fetchUpcomingMovies(media_type, currentPage).then((response) => {
					setMediaList(response.results);
					setTotalPages(response.total_pages);
				});

			default:
				break;
		}
	};
	useEffect(() => {
		whichFetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id, currentPage, media_type]);
	return (
		<main className="main-genre">
			<div className="main-genre-title">
				<h1>
					{media_type.toUpperCase()}
					{media_type === "tv" ? " Shows" : "S"}
				</h1>
				<p>{id.categorieId.toUpperCase()}</p>
			</div>
			<div className="main-genre-list">
				{mediaList.length > 0 ? (
					mediaList.map((media) => (
						<NavLink
							to={`/${media_type}/id/${media.id}`}
							className="genre-media-link"
							key={media.id}
						>
							<PagePoster media={media} />
							<div className="media-title">
								<span>{media_type === "movie" ? media.title : media.name}</span>
								<span className="title-rating">
									<RatingIcon />
									{media.vote_average}
								</span>
							</div>
						</NavLink>
					))
				) : (
					<div className="cube-loader">
						<CubeLoader width={"200px"} height={"200px"} />
						<span>Please wait ...</span>
					</div>
				)}
			</div>
			{totalPages ? (
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			) : null}
		</main>
	);
};
