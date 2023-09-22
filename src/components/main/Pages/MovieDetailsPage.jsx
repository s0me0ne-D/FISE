import { useParams } from "react-router-dom";
import { fetchDetails } from "../../../fetch/fetchDetails";
import { useEffect, useState } from "react";
import "./detailsPage.scss";
import { URL } from "../../../store/URL_SORE";
import { fetchTrailerId } from "../../../fetch/fetchTrailerId";
import { TrailerButton } from "./TrailerButton";
import { RatingIcon } from "../../../images/icons/RatingIcon";
import haveNotPoster from "../../../images/haveNotPoster.png";

export const MovieDetailsPage = () => {
	const id = useParams();
	const [details, setDetails] = useState(false);
	const [trailerKeys, setTrailerKeys] = useState(false);
	const [trailerKeyUrl, setTrailerKeyUrl] = useState(false);
	useEffect(() => {
		const fetch = async () => {
			fetchDetails("movie", id.movieId).then((res) => setDetails(res));
		};
		fetch();
		const fetchKey = async () => {
			fetchTrailerId("movie", id.movieId).then((res) => setTrailerKeys(res));
		};
		fetchKey();
	}, [id]);
	useEffect(() => {
		if (trailerKeys) {
			trailerKeys.results.forEach((key) => {
				if (key.name.includes("Trailer")) {
					setTrailerKeyUrl(key);
				}
			});
		}
	}, [trailerKeys]);
	return details ? (
		<main className="main-details">
			{details.backdrop_path ? (
				<img
					src={URL.ORIGINAL_IMG_URL + details.backdrop_path}
					alt="background"
					className="background-img"
				/>
			) : null}
			<div className="left-column">
				<img
					src={details.poster_path ? URL.ORIGINAL_IMG_URL + details.poster_path : haveNotPoster}
					alt="POSTER"
					className={details.poster_path ? "details-poster" : "details-poster have-not"}
				/>
				<div className="rating-container">
					<RatingIcon />
					<span>{details.vote_average}</span>
				</div>
				<div className="trailer-container">
					<TrailerButton trailerKeyUrl={trailerKeyUrl} />
				</div>
			</div>
			<div className="right-column">
				<ul className="details-list">
					<li className="details-title">{details.title}</li>
					{details.tagline ? (
						<li className="tagline">
							<span>Tagline: </span>"{details.tagline}"
						</li>
					) : null}
					<li className="relese">
						<span>Release date: </span>
						{details.release_date}
					</li>
					<li className="countrie">
						<span>Countrie: </span>
						{details.production_countries.map((countrie) => countrie.iso_3166_1 + " ")}
					</li>
					<li className="details-genre">
						<span>Genre: </span>
						<ul className="details-genres">
							{details.genres.map((genre) => (
								<li key={genre.name}>{genre.name}</li>
							))}
						</ul>
					</li>
					<li className="overview">
						<span>
							Overview: <br />
						</span>
						{details.overview}
					</li>
				</ul>
			</div>
		</main>
	) : null;
};
