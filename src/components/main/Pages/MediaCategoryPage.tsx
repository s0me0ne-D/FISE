import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Pagination } from './MediaGenrePage/Pagination';
import { RatingIcon } from '../../../assets/icons/RatingIcon';
import { PagePoster } from './PagePoster';
import { CubeLoader } from '../../../assets/CubeLoader';
import { useGetByCategoryQuery } from '../../../redux/api';
import { handleCategoryTitle } from '../../../utils/handleCategoryTitle';
import { MediaType } from '../../../interfaces/media_interface';

export const MediaCategoryPage = ({ media_type }: { media_type: MediaType }) => {
	const id = useParams();
	const category = id.categoryId;
	const categoryTitle = handleCategoryTitle(category!).toUpperCase();
	const [currentPage, setCurrentPage] = useState<number>(1);

	const [queryParams, setQueryParams] = useState({
		mediaType: media_type,
		category,
		pageNumber: currentPage,
	});

	useEffect(() => {
		setQueryParams((prev) => ({ ...prev, mediaType: media_type, pageNumber: currentPage }));
	}, [media_type, currentPage]);

	const { data } = useGetByCategoryQuery(queryParams);

	return (
		<main className='main-genre'>
			<div className='main-genre-title'>
				<div className='main-genre-title_container'>
					<h1>
						{media_type.toUpperCase()}
						{media_type === 'tv' ? ' Shows' : 'S'}
					</h1>
					<p>{categoryTitle}</p>
				</div>
			</div>
			{data ? (
				<>
					<div className='main-genre-list'>
						{data.results.map((media) => (
							<NavLink
								to={`/${media_type}/id/${media.id}`}
								className='genre-media-link'
								key={media.id}
							>
								<PagePoster media={media} />
								<div className='media-title'>
									<span>{media_type === 'movie' ? media.title : media.name}</span>
									<span className='title-rating'>
										<RatingIcon />
										{media.vote_average.toFixed(1)}
									</span>
								</div>
							</NavLink>
						))}
					</div>
					<Pagination
						totalPages={data.total_pages}
						currentPage={currentPage}
						changePage={setCurrentPage}
					/>
				</>
			) : (
				<div className='cube-loader'>
					<CubeLoader width={'200px'} height={'200px'} />
					<span>Please wait ...</span>
				</div>
			)}
		</main>
	);
};
