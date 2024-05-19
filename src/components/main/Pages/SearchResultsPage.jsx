import { useParams, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Pagination } from './genrePage/Pagination';
import { RatingIcon } from '../../../images/icons/RatingIcon';
import { PagePoster } from './PagePoster';
import { CubeLoader } from '../../../images/CubeLoader';
import { useGetSearchQuery } from '../../../redux/api';

export const SearchResultsPage = () => {
	const id = useParams();
	const searchValue = id.searchValue;
	const [currentPage, setCurrentPage] = useState(1);

	const { data } = useGetSearchQuery({ searchValue, currentPage });

	return (
		<main className='main-genre'>
			<div className='main-genre-title'>
				<h1>SEARCH: </h1>
				<p>{searchValue.toUpperCase()}</p>
			</div>
			<div className='main-genre-list'>
				{data ? (
					data.results.map((media) => {
						if (media.media_type !== 'person') {
							return (
								<NavLink
									to={`/${media.media_type}/id/${media.id}`}
									className='genre-media-link'
									key={media.id}
								>
									<PagePoster media={media} />
									<div className='media-title'>
										<span>{media.media_type === 'movie' ? media.title : media.name}</span>
										<span className='title-rating'>
											<RatingIcon />
											{media.vote_average.toFixed(1)}
										</span>
									</div>
								</NavLink>
							);
						} else {
							return null;
						}
					})
				) : (
					<div className='cube-loader'>
						<CubeLoader width={'200px'} height={'200px'} />
						<span>Please wait ...</span>
					</div>
				)}
			</div>
			{data ? (
				<Pagination
					totalPages={data.total_pages}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
			) : null}
		</main>
	);
};
