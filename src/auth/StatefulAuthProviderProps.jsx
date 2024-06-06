import { Auth0Provider } from '@auth0/auth0-react';
import configuration from '../configuration';
import { useNavigate } from 'react-router-dom';

const authConfig = {
	domain: configuration.auth0Domain,
	clientId: configuration.auth0ClientId,
};

export function StatefulAuthProvider({ children }) {
	const navigate = useNavigate();

	const onRedirectCallback = (appState) => {
		navigate(appState?.returnTo || window.location.pathname);
	};

	return (
		<Auth0Provider
			{...authConfig}
			useRefreshTokens
			cacheLocation='localstorage'
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
}
