import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';
import { configuration } from '../configuration';

const authConfig: Auth0ProviderOptions = {
	domain: configuration.auth0Domain!,
	clientId: configuration.auth0ClientId!,
	authorizationParams: { redirect_uri: window.location.origin },
	//FOR DEV USE configuration.PAGE_BASE_URL for redirect_uri
};

interface StatefulAuthProviderProps {
	children?: React.ReactNode;
}

export function StatefulAuthProvider({ children }: StatefulAuthProviderProps) {
	return (
		<Auth0Provider {...authConfig} cacheLocation='localstorage'>
			{children}
		</Auth0Provider>
	);
}
