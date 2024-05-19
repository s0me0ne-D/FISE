import { NavLink } from 'react-router-dom';
import './mainCategorie.scss';
import { ArrowBack } from '../../images/icons/ArrowBack';
import { ArrowForward } from '../../images/icons/ArrowForward';
import { useCallback, useRef, useState } from 'react';
import { MainCategorieMediaPoster } from './MainCategorieMediaPoster';
import { useGetCategorieQuery } from '../../redux/api';
import { handleCategoryTitle } from '../../utils/handleCategoryTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const MainCategorie = ({ category, title, mediaType }) => {
	const categoryText = handleCategoryTitle(category);
	const [showNavigationArrows, setShowNavigationArrows] = useState({ start: false, end: true });

	const { data } = useGetCategorieQuery({ mediaType, category });
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
			<div className='main-categorie'>
				<div className='categorie-title'>
					<NavLink to={mediaType + '/' + category}>
						{categoryText} {title}
					</NavLink>
				</div>
				<div className='categorie-list-container'>
					{showNavigationArrows.start && (
						<button className='categorie-back categorie-navigate' onClick={handlePrev}>
							<ArrowBack />
						</button>
					)}

					{showNavigationArrows.end && (
						<button className='categorie-forward categorie-navigate' onClick={handleNext}>
							<ArrowForward />
						</button>
					)}

					<div className='categorie-list' ref={listRef}>
						<Swiper ref={swiperRef} slidesPerView={'auto'} onSlideChange={handleOnSlideChange}>
							{data.results.map((media) => (
								<SwiperSlide style={{ width: 'fit-content' }} key={media.id}>
									<MainCategorieMediaPoster media_type={mediaType} media={media} key={media.id} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		)
	);
};
