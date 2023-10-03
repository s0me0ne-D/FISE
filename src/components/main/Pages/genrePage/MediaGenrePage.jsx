import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { fetchByGenre } from "../../../../fetch/fetchByGenre";
import "./movieGenrePage.scss";
import { RatingIcon } from "../../../../images/icons/RatingIcon";
import { Pagination } from "./Pagination";
import { PagePoster } from "../PagePoster";

export const MediaGenrePage = ({ media_type }) => {
	const id = useParams();
	const genreName = id.genreId.split("=");
	const [mediaList, setMediaList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	useEffect(() => {
		fetchByGenre(media_type, currentPage, genreName[1]).then((response) => {
			setMediaList(response.results);
			setTotalPages(response.total_pages);
		});
	}, [id, currentPage, media_type]);
	return (
		<main className="main-genre">
			<div className="main-genre-title">
				<h1>
					{media_type.toUpperCase()} {media_type === "tv" ? "Shows" : ""}
				</h1>
				<p>{genreName[0].toUpperCase()}</p>
			</div>
			<div className="main-genre-list">
				{mediaList
					? mediaList.map((media) => (
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
					: null}
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
