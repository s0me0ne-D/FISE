import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer';
import { useSelector } from 'react-redux';
import { PopUp } from '../PopUp/PopUp';

export const Layout = () => {
	const { showPopUp } = useSelector((store) => store.popUpReducer);

	return (
		<>
			<Header />
			<Outlet />
			{showPopUp && <PopUp />}
			<Footer />
		</>
	);
};
