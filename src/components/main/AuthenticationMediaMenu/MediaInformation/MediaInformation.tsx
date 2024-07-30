import React, { useState } from 'react';
import { InfoIcon } from '../../../../assets/icons/InfoIcon';
import { MediaInformationPopUp } from './MediaInformationPopUp/MediaInformationPopUp';
import { Media } from '../../../../interfaces/media_interface';
import { Portal } from './MediaInformationPopUp/Portal';
import { SpinerLoader } from '../../../../assets/SpinerLoader/SpinnerLoader';

export const MediaInformation = ({ media }: { media: Media }) => {
	const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	return (
		<span
			className='information media-menu-option'
			onMouseEnter={() => setIsShowPopUp(true)}
			onMouseLeave={() => setIsShowPopUp(false)}
		>
			{isShowPopUp && (
				<Portal>
					<MediaInformationPopUp media={media} showLoader={setIsLoading} />
				</Portal>
			)}
			{isLoading ? <SpinerLoader /> : <InfoIcon />}
		</span>
	);
};
