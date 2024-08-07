import { useParams } from 'react-router-dom';
import './detailsPage.scss';
import { URL } from '../../../store/URL_SORE';
import { TrailerButton } from './TrailerButton/TrailerButton';
import { RatingIcon } from '../../../assets/icons/RatingIcon';
import { DetailsPagePoster } from './DetailsPagePoster';
import { CubeLoader } from '../../../assets/CubeLoader';
import { useGetDetailsQuery } from '../../../redux/api';
import { MediaType } from '../../../interfaces/media_interface';
import { useTrailerKeyUrl } from '../../../hooks/useTrailerKeyUrl';

const mediaType: MediaType = 'movie';

export const MovieDetailsPage = () => {
	const id = useParams();
	const queryParams = { mediaType, id: Number(id.movieId) };
	const trailerKeyUrl = useTrailerKeyUrl(queryParams);

	const { data } = useGetDetailsQuery(queryParams);

	return data ? (
		<main className='main-details'>
			{data.backdrop_path ? (
				<img
					src={URL.LAZY_LOAD_IMG_URL + data.backdrop_path}
					alt='background'
					className='background-img'
				/>
			) : null}
			<div className='left-column'>
				<DetailsPagePoster details={data} />
				<div className='rating-container'>
					<RatingIcon />
					<span>{data.vote_average.toFixed(1)}</span>
				</div>
				{trailerKeyUrl ? (
					<div className='trailer-container'>
						<TrailerButton trailerKeyUrl={trailerKeyUrl} />
					</div>
				) : null}
			</div>
			<div className='right-column'>
				<ul className='details-list'>
					<li className='details-title'>{data.title}</li>
					{data.tagline ? (
						<li className='tagline'>
							<span>Tagline: </span>"{data.tagline}"
						</li>
					) : null}
					<li className='relese'>
						<span>Release date: </span>
						{data.release_date}
					</li>
					<li className='countrie'>
						<span>Countrie: </span>
						{data.production_countries.map((countrie) => countrie.iso_3166_1 + ' ')}
					</li>
					<li className='details-genre'>
						<span>Genre: </span>
						<ul className='details-genres'>
							{data.genres.map((genre) => (
								<li key={genre.name}>{genre.name}</li>
							))}
						</ul>
					</li>
					{data.overview && (
						<li className='overview'>
							<span>
								Overview: <br />
							</span>
							{data.overview}
						</li>
					)}
				</ul>
			</div>
		</main>
	) : (
		<div className='media-page-loader'>
			<CubeLoader width={'200px'} height={'200px'} />
			<span>Please wait ...</span>
		</div>
	);
};
