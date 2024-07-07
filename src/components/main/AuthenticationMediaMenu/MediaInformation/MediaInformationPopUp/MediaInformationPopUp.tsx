import './mediaInformationPopUp.scss';
import { Media } from '../../../../../interfaces/media_interface';
import { useEffect, useState } from 'react';

const initialPosition = { x: 0, y: 0 };

export const MediaInformationPopUp = ({ media }: { media: Media }) => {
	const [mousePos, setMousePos] = useState(initialPosition);
	const element = document.getElementById('root');

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			if (element) {
				const rect = element.getBoundingClientRect();
				setMousePos({
					x: event.clientX - rect.left,
					y: event.clientY - rect.top,
				});
			}
		};

		if (element && mousePos === initialPosition) {
			element.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (element && mousePos === initialPosition) {
				element.removeEventListener('mousemove', handleMouseMove);
			}
		};
	}, [element, mousePos]);

	if (mousePos === initialPosition) {
		return null;
	}
	return (
		<div style={{ top: mousePos.y, left: mousePos.x }} className='information-popup'>
			InformationPopup
		</div>
	);
};
