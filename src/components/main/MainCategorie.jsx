import { NavLink } from 'react-router-dom';
import './mainCategorie.scss';
import { ArrowBack } from '../../images/icons/ArrowBack';
import { ArrowForward } from '../../images/icons/ArrowForward';
import { useCallback, useRef } from 'react';
import { MainCategorieMediaPoster } from './MainCategorieMediaPoster';
import { useGetCategorieQuery } from '../../redux/api';
import { handleCategoryTitle } from '../../utils/handleCategoryTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const MainCategorie = ({ category, title, mediaType }) => {
	const categoryText = handleCategoryTitle(category);

	const { data } = useGetCategorieQuery({ mediaType, category });
	const listRef = useRef(null);
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
		data && (
			<div className='main-categorie'>
				<div className='categorie-title'>
					<NavLink to={mediaType + '/' + category}>
						{categoryText} {title}
					</NavLink>
				</div>
				<div className='categorie-list-container'>
					<button className='categorie-back categorie-navigate' onClick={handlePrev}>
						<ArrowBack />
					</button>
					<button className='categorie-forward categorie-navigate' onClick={handleNext}>
						<ArrowForward />
					</button>

					<div className='categorie-list' ref={listRef}>
						<Swiper ref={swiperRef} slidesPerView={'auto'}>
							{data.results.map((media) => (
								<SwiperSlide style={{ width: 'fit-content' }}>
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
