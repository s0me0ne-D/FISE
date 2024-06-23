import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './mediaGenrePage.scss';
import { RatingIcon } from '../../../../assets/icons/RatingIcon';
import { Pagination } from './Pagination';
import { PagePoster } from '../PagePoster';
import { CubeLoader } from '../../../../assets/CubeLoader';
import { useGetByGenreQuery } from '../../../../redux/api';
import { Sort } from './Sort/Sort';
import { Filter } from './Filter/Filter';
import { useFilterOptionsByYear } from './Filter/useFilterOptionsByYear';
import { MediaType } from '../../../../interfaces/media_interface';
import { QueryParams } from '../../../../interfaces/queryParams_interface';

export const MediaGenrePage = ({ media_type }: { media_type: MediaType }) => {
	const id = useParams();
	const genre = id.genreId!.split('=');

	const [queryParams, setQueryParams] = useState<QueryParams>({
		mediaType: media_type,
		pageNumber: 1,
		genreId: Number(genre[1]),
	});

	const changePage = (page: number) => setQueryParams((prev) => ({ ...prev, pageNumber: page }));

	useEffect(() => {
		setQueryParams((prev) => ({ ...prev, mediaType: media_type, genreId: Number(genre[1]) }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [media_type, id]);

	const filterByYear = (year: number | null) => {
		const query = `${
			media_type === 'movie' ? 'primary_release_year' : 'first_air_date_year'
		}=${year}`;
		setQueryParams((prev) => ({ ...prev, filterByReleaseYear: query }));
	};

	const { data } = useGetByGenreQuery(queryParams);

	const filterOptionsByYear = useFilterOptionsByYear();

	return (
		<main className='main-genre'>
			<div className='main-genre-title'>
				<div className='main-genre-title_container'>
					<h1>
						{media_type.toUpperCase()} {media_type === 'tv' ? 'Shows' : ''}
					</h1>
					<p>{genre[0].toUpperCase()}</p>
					<div className='main-genre-title_container_options'>
						<Sort setQueryParams={setQueryParams} mediaType={media_type} />
						<Filter
							title={'Release year'}
							filterOptions={filterOptionsByYear}
							filter={filterByYear}
						/>
					</div>
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
						currentPage={queryParams.pageNumber!}
						changePage={changePage}
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
