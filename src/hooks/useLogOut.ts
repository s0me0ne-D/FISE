import { useAuth0 } from '@auth0/auth0-react';

export const useLogOut = () => {
	const { logout } = useAuth0();

	const handleLogout = () => {
		logout({
			logoutParams: {
				returnTo: window.location.origin,
				//FOR DEV USE configuration.PAGE_BASE_URL for redirect_uri
			},
		});
	};
	return handleLogout;
};
