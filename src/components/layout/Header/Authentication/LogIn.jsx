import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const LogIn = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<button className='profile_login' onClick={() => loginWithRedirect()}>
			Log in
		</button>
	);
};
