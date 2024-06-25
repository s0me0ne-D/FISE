import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Pagination } from './MediaGenrePage/Pagination';
import { PosterCard } from './PosterCard/PagePoster';
import { CubeLoader } from '../../../assets/CubeLoader';
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
				<p>{searchValue?.toUpperCase()}</p>
			</div>
			<div className='main-genre-list'>
				{data ? (
					data.results.map((media) => {
						if (media.media_type !== 'person') {
							return <PosterCard media={media} mediaType={media.media_type} key={media.id} />;
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
					changePage={setCurrentPage}
				/>
			) : null}
		</main>
	);
};
