import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { StatefulAuthProvider } from './auth/StatefulAuthProviderProps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StatefulAuthProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</StatefulAuthProvider>
);
