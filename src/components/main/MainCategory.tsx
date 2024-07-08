import { NavLink } from 'react-router-dom';
import { ArrowBack } from '../../assets/icons/ArrowBack';
import { ArrowForward } from '../../assets/icons/ArrowForward';
import { useCallback, useRef, useState } from 'react';
import { useGetByCategoryQuery } from '../../redux/api';
import { handleCategoryTitle } from '../../utils/handleCategoryTitle';
import { MediaPoster } from './MediaPoster/MediaPoster';
import { SwiperClass, Swiper, SwiperSlide } from 'swiper/react';
import { Category } from './Main';

import './mainCategory.scss';
import 'swiper/css';

export const MainCategory = ({ category, title, mediaType }: Category) => {
	const categoryText = handleCategoryTitle(category);
	const [showNavigationArrows, setShowNavigationArrows] = useState({ start: false, end: true });

	const { data } = useGetByCategoryQuery({ mediaType, category });
	const listRef = useRef(null);
	const swiperRef = useRef<SwiperClass | null>(null);

	const handlePrev = useCallback(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		swiper.slidePrev();
	}, []);

	const disableArrowNext = () => {
		setShowNavigationArrows((prev) => ({ ...prev, end: false }));
	};

	const handleNext = useCallback(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		swiper.slideNext();
		swiper.isEnd && disableArrowNext();
	}, []);

	const handleOnSlideChange = useCallback(() => {
		const swiper = swiperRef.current;
		if (swiper?.isBeginning) {
			setShowNavigationArrows(() => ({ start: false, end: true }));
		} else if (swiper?.isEnd) {
			disableArrowNext();
			setShowNavigationArrows((prev) => ({ ...prev, start: true }));
		} else {
			setShowNavigationArrows({ start: true, end: true });
		}
	}, []);

	return (
		data && (
			<div className='main-category'>
				<div className='category-title'>
					<NavLink to={mediaType + '/' + category}>
						{categoryText} {title}
					</NavLink>
				</div>
				<div className='category-list-container'>
					{showNavigationArrows.start && (
						<button className='category-back category-navigate' onClick={handlePrev}>
							<ArrowBack />
						</button>
					)}

					{showNavigationArrows.end && (
						<button className='category-forward category-navigate' onClick={handleNext}>
							<ArrowForward />
						</button>
					)}

					<div className='category-list' ref={listRef}>
						<Swiper
							onSwiper={(swiper) => {
								swiperRef.current = swiper;
							}}
							slidesPerView={'auto'}
							onSlideChange={handleOnSlideChange}
						>
							{data.results.map((media) => (
								<SwiperSlide style={{ width: 'fit-content' }} key={media.id}>
									<MediaPoster media_type={mediaType} media={media} key={media.id} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		)
	);
};
