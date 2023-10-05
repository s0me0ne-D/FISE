import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./detailsPage.scss";
import { URL } from "../../../store/URL_SORE";
import { fetchTrailerId } from "../../../fetch/fetchTrailerId";
import { TrailerButton } from "./TrailerButton";
import { RatingIcon } from "../../../images/icons/RatingIcon";
import { fetchDetails } from "../../../fetch/fetchDetails";
import { DetailsPagePoster } from "./DetailsPagePoster";
import { CubeLoader } from "../../../images/CubeLoader";

export const TvDetailsPage = () => {
	const id = useParams();
	const [details, setDetails] = useState(false);
	const [trailerKeys, setTrailerKeys] = useState(false);
	const [trailerKeyUrl, setTrailerKeyUrl] = useState(false);
	useEffect(() => {
		const fetch = async () => {
			fetchDetails("tv", id.tvId).then((res) => setDetails(res));
		};
		fetch();
		const fetchKey = async () => {
			fetchTrailerId("tv", id.tvId).then((res) => setTrailerKeys(res));
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
			<img
				src={URL.ORIGINAL_IMG_URL + details.backdrop_path}
				alt="background"
				className="background-img"
			/>
			<div className="left-column">
				<DetailsPagePoster details={details} />

				<div className="rating-container">
					<RatingIcon />
					<span>{details.vote_average}</span>
				</div>
				{trailerKeyUrl ? (
					<div className="trailer-container">
						<TrailerButton trailerKeyUrl={trailerKeyUrl} />
					</div>
				) : null}
			</div>
			<div className="right-column">
				<ul className="details-list">
					<li className="details-title">{details.name}</li>
					{details.tagline ? (
						<li className="tagline">
							<span>Tagline: </span>"{details.tagline}"
						</li>
					) : null}
					<li className="relese">
						<span>Release date: </span>
						{details.first_air_date}
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
	) : (
		<div className="media-page-loader">
			<CubeLoader width={"200px"} height={"200px"} />
			<span>Please wait ...</span>
		</div>
	);
};
