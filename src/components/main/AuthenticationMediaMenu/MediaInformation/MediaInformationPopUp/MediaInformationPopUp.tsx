import './mediaInformationPopUp.scss';
import { Media } from '../../../../../interfaces/media_interface';
import { useEffect, useState } from 'react';
import { getMediaType } from '../../../../../utils/getMediaType';
import { useGetDetailsQuery } from '../../../../../redux/api';
import { PopUpTitle } from './PopUpComponents/PopUpTitle';
import { Rating } from '../../../../Rating/Rating';
import { PopUpOverview } from './PopUpComponents/PopUpOverview';
import { MediaGenres } from '../../../../MediaGenres/MediaGenres';
import { PopUpReleaseDate } from './PopUpComponents/PopUpReleaseDate';

const initialPosition = { x: 0, y: 0 };

interface MediaInformationPopUpProps {
	media: Media;
	showLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MediaInformationPopUp = ({ media, showLoader }: MediaInformationPopUpProps) => {
	const [popUpPosition, setPopUpPosition] = useState(initialPosition);

	const element = document.getElementById('root');
	const { innerWidth } = window;
	const mediaType = getMediaType(media);

	const { data, isLoading } = useGetDetailsQuery({ mediaType, id: media.id });

	useEffect(() => {
		isLoading ? showLoader(true) : showLoader(false);
	}, [isLoading, showLoader]);

	useEffect(() => {
		const handlePopUpPosition = (event: MouseEvent) => {
			if (element) {
				const rect = element.getBoundingClientRect();

				const mousePositionX = event.clientX - rect.left;
				const rightSideDistance = innerWidth - mousePositionX;
				const positionX = rightSideDistance < 320 ? mousePositionX - 300 : mousePositionX;
				const positionY = event.clientY - rect.top - 20;

				setPopUpPosition({
					x: positionX,
					y: positionY,
				});
			}
		};

		if (element && popUpPosition === initialPosition) {
			element.addEventListener('mousemove', handlePopUpPosition);
		}

		return () => {
			if (element && popUpPosition === initialPosition) {
				element.removeEventListener('mousemove', handlePopUpPosition);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [element, popUpPosition]);

	if (popUpPosition === initialPosition) {
		return null;
	}
	return data ? (
		<div style={{ top: popUpPosition.y, left: popUpPosition.x }} className='information-popup'>
			<PopUpTitle
				title={data.name ? data.name! : data.title!}
				mediaType={mediaType}
				mediaId={media.id}
			/>
			<Rating rating={data.vote_average} />
			<PopUpReleaseDate date={mediaType === 'movie' ? data.release_date! : data.first_air_date!} />
			<PopUpOverview overview={data.overview} />
			<MediaGenres genres={data.genres} />
		</div>
	) : null;
};
