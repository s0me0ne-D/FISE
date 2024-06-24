import React, { useState } from 'react';
import fallbackImg from '../../../../assets/UserFallbackImage.png';
import { useAuth0 } from '@auth0/auth0-react';

export const UserAccountFallbackImage = () => {
	const { user } = useAuth0();

	const [imgSrc, setImgSrs] = useState(user?.picture);

	const handleImageError = () => {
		setImgSrs(fallbackImg);
	};
	return <img src={imgSrc} alt='user' onError={handleImageError} />;
};
