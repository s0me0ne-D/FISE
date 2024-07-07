import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ children }: { children: ReactNode }) => {
	const portal = document.getElementById('portal');
	return ReactDOM.createPortal(children, portal as Element);
};
