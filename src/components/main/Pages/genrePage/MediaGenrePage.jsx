import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./movieGenrePage.scss";
import { RatingIcon } from "../../../../images/icons/RatingIcon";
import { Pagination } from "./Pagination";
import { PagePoster } from "../PagePoster";
import { CubeLoader } from "../../../../images/CubeLoader";
import { useGetByGenreQuery } from "../../../../redux/api";

export const MediaGenrePage = ({ media_type }) => {
	const id = useParams();
	const genre = id.genreId.split("=");

	const [currentPage, setCurrentPage] = useState(1);

	const { data } = useGetByGenreQuery({
		mediaType: media_type,
		pageNumber: currentPage,
		genreId: genre[1],
	});

	return (
		<main className="main-genre">
			<div className="main-genre-title">
				<div className="main-genre-title_container">
					<h1>
						{media_type.toUpperCase()} {media_type === "tv" ? "Shows" : ""}
					</h1>
					<p>{genre[0].toUpperCase()}</p>
				</div>
			</div>
			{data ? (
				<>
					<div className="main-genre-list">
						{data.results.map((media) => (
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
						))}
					</div>
					<Pagination
						totalPages={data.total_pages}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</>
			) : (
				<div className="cube-loader">
					<CubeLoader width={"200px"} height={"200px"} />
					<span>Please wait ...</span>
				</div>
			)}
		</main>
	);
};
