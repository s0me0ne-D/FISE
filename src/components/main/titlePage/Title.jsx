import React, { useState, useEffect } from 'react';
import { useGetAllTrandingsQuery } from '../../../redux/api';
import { TitleSlider } from './TitleSlider';
import { TitleDescription } from './TitleDescription';
import { URL } from '../../../store/URL_SORE';

const { ORIGINAL_IMG_URL } = URL;

export const Title = () => {
	const { data } = useGetAllTrandingsQuery();

	const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

	const slideTitle = () => {
		currentMovieIndex < data.length - 1
			? setCurrentMovieIndex(currentMovieIndex + 1)
			: setCurrentMovieIndex(0);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => slideTitle(), 10000);
		return () => clearTimeout(timeoutId);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentMovieIndex, data]);

	return (
		data && (
			<div className='main-title'>
				<TitleDescription allTranding={data} currentMovieIndex={currentMovieIndex} />
				<TitleSlider allTranding={data} currentMovieIndex={currentMovieIndex} />
				<img
					src={ORIGINAL_IMG_URL + data[currentMovieIndex].backdrop_path}
					alt='title-img'
					className='title-background'
				/>
			</div>
		)
	);
};
