import React, { useState } from 'react';
import { InfoIcon } from '../../../../assets/icons/InfoIcon';
import { MediaInformationPopUp } from './MediaInformationPopUp/MediaInformationPopUp';

export const MediaInformation = () => {
	const [isShowPopUp, setIsShowPopUp] = useState<boolean>(false);
	return (
		<span
			className='information media-menu-option'
			onMouseEnter={() => setIsShowPopUp(true)}
			onMouseLeave={() => setIsShowPopUp(false)}
		>
			{isShowPopUp && <MediaInformationPopUp />}
			<InfoIcon />
		</span>
	);
};
