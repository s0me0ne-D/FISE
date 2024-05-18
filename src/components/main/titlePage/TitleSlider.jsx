import { useRef, useCallback } from 'react';
import { ArrowBack } from '../../../images/icons/ArrowBack';
import { ArrowForward } from '../../../images/icons/ArrowForward';
import './titleSlider.scss';
import { TitleSliderMediaPoster } from './TitleSliderMediaPoster';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const breakpointsProps = {
	300: {
		slidesPerView: 3,
	},
	650: {
		slidesPerView: 4,
	},
	1000: {
		slidesPerView: 6,
	},
	1300: {
		slidesPerView: 8,
	},
	1700: {
		slidesPerView: 10,
	},
};

export const TitleSlider = ({ allTranding, currentMovieIndex }) => {
	const swiperRef = useRef(null);

	const handlePrev = useCallback(() => {
		if (!swiperRef.current) return;
		swiperRef.current.swiper.slidePrev();
	}, []);
	const handleNext = useCallback(() => {
		if (!swiperRef.current) return;
		swiperRef.current.swiper.slideNext();
	}, []);

	return (
		<div className='title-slider'>
			<button className='slider-navigation back' onClick={handlePrev}>
				<ArrowBack />
			</button>
			<Swiper breakpoints={breakpointsProps} ref={swiperRef}>
				{allTranding.map((movie, index) => (
					<SwiperSlide>
						<TitleSliderMediaPoster
							movie={movie}
							index={index}
							currentMovieIndex={currentMovieIndex}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<button className='slider-navigation forward' onClick={handleNext}>
				<ArrowForward />
			</button>
		</div>
	);
};
