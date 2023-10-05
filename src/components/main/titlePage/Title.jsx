import { NavLink } from "react-router-dom";
import "./title.scss";
import { MoreInfo } from "../../../images/icons/MoreInfo";

export const Title = ({ allTranding, currentMovieIndex }) => {
	const currentMovie = allTranding[currentMovieIndex];
	return (
		<div className="title">
			<div className="title-name">
				{currentMovie.media_type === "movie" ? `${currentMovie.title}` : `${currentMovie.name}`}
			</div>
			<NavLink className="title-more-info" to={currentMovie.media_type + "/id/" + currentMovie.id}>
				<MoreInfo />
				More Info
			</NavLink>
		</div>
	);
};
