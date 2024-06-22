import React, { useState, useEffect } from 'react';
import { useGetAllTrandingsQuery } from '../../../redux/api';
import { TitleSlider } from './TitleSlider';
import { TitleDescription } from './TitleDescription';
import { URL } from '../../../store/URL_SORE';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const { ORIGINAL_IMG_URL, LAZY_LOAD_IMG_URL } = URL;

export const Title = () => {
	const { data } = useGetAllTrandingsQuery();

	const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
	const [isLoadingPoster, setIsLoadingPoster] = useState(true);

	const slideTitle = () => {
		if (data) {
			currentMovieIndex < data.length - 1
				? setCurrentMovieIndex(currentMovieIndex + 1)
				: setCurrentMovieIndex(0);
		}
	};

	useEffect(() => {
		if (!isLoadingPoster) {
			const timeoutId = setTimeout(() => slideTitle(), 10000);
			return () => clearTimeout(timeoutId);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentMovieIndex, data, isLoadingPoster]);

	return (
		data && (
			<div className='main-title'>
				<TitleDescription allTranding={data} currentMovieIndex={currentMovieIndex} />
				<TitleSlider allTranding={data} currentMovieIndex={currentMovieIndex} />
				<LazyLoadImage
					onLoad={() => {
						setIsLoadingPoster(false);
					}}
					src={ORIGINAL_IMG_URL + data[currentMovieIndex].backdrop_path}
					className='title-background'
					placeholderSrc={LAZY_LOAD_IMG_URL + data[currentMovieIndex].backdrop_path}
				/>
			</div>
		)
	);
};
