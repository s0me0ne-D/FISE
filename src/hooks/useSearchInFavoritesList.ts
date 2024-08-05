import { useSelector } from 'react-redux';
import { RootStore } from '../redux/store';

export const useSearchInFavoritesList = (mediaId: number) => {
	const { favorites } = useSelector((store: RootStore) => store.favoritesMediaReducer);
	const isInFavoritesList = favorites.find((favorite) => favorite.id === mediaId);
	return isInFavoritesList;
};
