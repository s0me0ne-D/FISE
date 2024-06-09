import { NavLink } from 'react-router-dom';
import './mainCategory.scss';
import { ArrowBack } from '../../assets/icons/ArrowBack';
import { ArrowForward } from '../../assets/icons/ArrowForward';
import { useCallback, useRef, useState } from 'react';
import { MainCategoryMediaPoster } from './MainCategoryMediaPoster';
import { useGetCategoryQuery } from '../../redux/api';
import { handleCategoryTitle } from '../../utils/handleCategoryTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const MainCategory = ({ category, title, mediaType }) => {
	const categoryText = handleCategoryTitle(category);
	const [showNavigationArrows, setShowNavigationArrows] = useState({ start: false, end: true });

	const { data } = useGetCategoryQuery({ mediaType, category });
	const listRef = useRef(null);
	const swiperRef = useRef(null);

	const handlePrev = useCallback(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		swiper.swiper.slidePrev();
	}, []);
	const handleNext = useCallback(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		swiper.swiper.slideNext();
	}, []);

	const handleOnSlideChange = () => {
		const swiper = swiperRef.current;
		if (swiper) {
			if (swiper.swiper.isBeginning) {
				setShowNavigationArrows((prev) => ({ ...prev, start: false }));
			} else if (swiper.swiper.isEnd) {
				setShowNavigationArrows((prev) => ({ ...prev, end: false }));
			} else {
				setShowNavigationArrows({ start: true, end: true });
			}
		}
	};

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
						<Swiper ref={swiperRef} slidesPerView={'auto'} onSlideChange={handleOnSlideChange}>
							{data.results.map((media) => (
								<SwiperSlide style={{ width: 'fit-content' }} key={media.id}>
									<MainCategoryMediaPoster media_type={mediaType} media={media} key={media.id} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		)
	);
};
