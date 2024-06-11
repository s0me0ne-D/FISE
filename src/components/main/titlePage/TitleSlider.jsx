import { useRef, useCallback } from 'react';
import { ArrowBack } from '../../../assets/icons/ArrowBack';
import { ArrowForward } from '../../../assets/icons/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MediaPoster } from '../MediaPoster/MediaPoster';

import 'swiper/css';
import './titleSlider.scss';

const sliderBreakpointsProps = {
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
		const swiper = swiperRef.current;
		if (!swiper) return;
		if (swiper.swiper.isBeginning) {
			const slidesPerView = swiper.swiper.params.slidesPerView;
			const totalSlides = swiper.swiper.slides.length;
			const lastIndex = Math.max(0, totalSlides - slidesPerView);
			swiper.swiper.slideTo(lastIndex);
		} else {
			swiper.swiper.slidePrev();
		}
	}, []);
	const handleNext = useCallback(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		if (swiper.swiper.isEnd) {
			swiper.swiper.slideTo(0);
		} else {
			swiper.swiper.slideNext();
		}
	}, []);

	return (
		<div className='title-slider'>
			<button className='slider-navigation back' onClick={handlePrev}>
				<ArrowBack />
			</button>
			<Swiper breakpoints={sliderBreakpointsProps} ref={swiperRef}>
				{allTranding.map((media, index) => (
					<SwiperSlide key={media.id}>
						<MediaPoster
							media_type={media.media_type}
							media={media}
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
