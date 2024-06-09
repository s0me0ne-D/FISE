import { useState } from 'react';
import haveNotPoster from '../../assets/haveNotPoster.png';
import { NavLink } from 'react-router-dom';
import { URL } from '../../store/URL_SORE';
import Loader from '../Loader';

export const MainCategoryMediaPoster = ({ media_type, media }) => {
	const [loading, setLoading] = useState(true);
	return (
		<NavLink className='category-movie' to={`/${media_type}/id/${media.id}`}>
			<img
				onLoad={() => setLoading(false)}
				src={media.poster_path ? URL.LAZY_LOAD_IMG_URL + media.poster_path : haveNotPoster}
				alt='poster'
				className={`category-movie-poster ${!media.poster_path && 'have-not'} ${
					loading && 'loading'
				} `}
				title={media.name ? media.name : media.title}
			/>
			{loading && <Loader className={'category-movie-poster'} />}
		</NavLink>
	);
};
