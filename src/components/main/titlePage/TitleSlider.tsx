import { useRef, useCallback } from 'react';
import { ArrowBack } from '../../../assets/icons/ArrowBack';
import { ArrowForward } from '../../../assets/icons/ArrowForward';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { MediaPoster } from '../MediaPoster/MediaPoster';

import 'swiper/css';
import './titleSlider.scss';
import { Media } from '../../../interfaces/media_interface';

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

interface TitleSliderProps {
	allTranding: Media[];
	currentMovieIndex: number;
}

export const TitleSlider = ({ allTranding, currentMovieIndex }: TitleSliderProps) => {
	const swiperRef = useRef<SwiperClass | null>(null);
	const handlePrev = useCallback(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		if (swiper.isBeginning) {
			const slidesPerView = swiper.params.slidesPerView as number;
			const totalSlides = swiper.slides.length;
			const lastIndex = Math.max(0, totalSlides - slidesPerView);
			swiper.slideTo(lastIndex);
		} else {
			swiper.slidePrev();
		}
	}, []);
	const handleNext = useCallback(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		if (swiper.isEnd) {
			swiper.slideTo(0);
		} else {
			swiper.slideNext();
		}
	}, []);

	return (
		<div className='title-slider'>
			<button className='slider-navigation back' onClick={handlePrev}>
				<ArrowBack />
			</button>
			<Swiper
				breakpoints={sliderBreakpointsProps}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
			>
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
