import './mediaInformationPopUp.scss';
import { Media } from '../../../../../interfaces/media_interface';
import { useEffect, useState } from 'react';
import { getMediaType } from '../../../../../utils/getMediaType';

const initialPosition = { x: 0, y: 0 };

export const MediaInformationPopUp = ({ media }: { media: Media }) => {
	const [popUpPosition, setPopUpPosition] = useState(initialPosition);

	const element = document.getElementById('root');
	const { innerWidth } = window;
	const mediaType = getMediaType(media);

	useEffect(() => {
		const handlePopUpPosition = (event: MouseEvent) => {
			if (element) {
				const rect = element.getBoundingClientRect();

				const mousePositionX = event.clientX - rect.left;
				const rightSideDistance = innerWidth - mousePositionX;
				const positionX = rightSideDistance < 220 ? mousePositionX - 200 : mousePositionX;
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
	return (
		<div style={{ top: popUpPosition.y, left: popUpPosition.x }} className='information-popup'>
			InformationPopup
		</div>
	);
};
