import { Auth0Provider } from '@auth0/auth0-react';
import { configuration } from '../configuration';

const authConfig = {
	domain: configuration.auth0Domain,
	clientId: configuration.auth0ClientId,
	authorizationParams: { redirect_uri: window.location.origin },
};

export function StatefulAuthProvider({ children }) {
	return (
		<Auth0Provider {...authConfig} cacheLocation='localstorage'>
			{children}
		</Auth0Provider>
	);
}
