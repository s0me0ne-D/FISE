import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer';
import { useSelector } from 'react-redux';
import { PopUp } from '../PopUp/PopUp';
import { RootStore } from '../../redux/store';

export const Layout = () => {
	const { showPopUp } = useSelector((store: RootStore) => store.popUpReducer);

	return (
		<>
			<Header />
			<Outlet />
			{showPopUp && <PopUp />}
			<Footer />
		</>
	);
};
