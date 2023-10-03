import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "./genrePage/Pagination";
import { RatingIcon } from "../../../images/icons/RatingIcon";
import { URL } from "../../../store/URL_SORE";
import { fetchSearch } from "../../../fetch/fetchSearch";
import haveNotPoster from "../../../images/haveNotPoster.png";
import { PagePoster } from "./PagePoster";

export const SearchResultsPage = () => {
	const id = useParams();
	const searchValue = id.searchValue;
	const [mediaList, setMediaList] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	useEffect(() => {
		fetchSearch(searchValue, currentPage).then((response) => {
			setMediaList(response.results);
			setTotalPages(response.total_pages);
		}); // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue, currentPage]);
	return (
		<main className="main-genre">
			<div className="main-genre-title">
				<h1>SEARCH: </h1>
				<p>{searchValue.toUpperCase()}</p>
			</div>
			<div className="main-genre-list">
				{mediaList
					? mediaList.map((media) => {
							if (media.media_type !== "person") {
								return (
									<NavLink
										to={`/${media.media_type}/id/${media.id}`}
										className="genre-media-link"
										key={media.id}
									>
										<PagePoster media={media} />
										<div className="media-title">
											<span>{media.media_type === "movie" ? media.title : media.name}</span>
											<span className="title-rating">
												<RatingIcon />
												{media.vote_average}
											</span>
										</div>
									</NavLink>
								);
							} else {
								return null;
							}
					  })
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
