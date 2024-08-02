import { createHashRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { MainPage } from './components/main/Main';
import { MovieDetailsPage } from './components/main/Pages/MovieDetailsPage';
import { TvDetailsPage } from './components/main/Pages/TvDetailsPage';
import { MediaGenrePage } from './components/main/Pages/MediaGenrePage/MediaGenrePage';
import { MediaCategoryPage } from './components/main/Pages/MediaCategoryPage';
import { SearchResultsPage } from './components/main/Pages/SearchResultsPage';
import { UnderConstructionPage } from './UnderConstructionPage/UnderConstructionPage';
import { FavoritesPage } from './components/main/Pages/FavoritesPage/FavoritesPage';

export const router = createHashRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: '/movie/id/:movieId',
				element: <MovieDetailsPage />,
			},
			{
				path: '/tv/id/:tvId',
				element: <TvDetailsPage />,
			},
			{
				path: '/movie/genre/:genreId',
				element: <MediaGenrePage media_type={'movie'} />,
			},
			{
				path: '/tv/genre/:genreId',
				element: <MediaGenrePage media_type={'tv'} />,
			},
			{ path: '/movie/:categoryId', element: <MediaCategoryPage media_type={'movie'} /> },
			{ path: '/tv/:categoryId', element: <MediaCategoryPage media_type={'tv'} /> },
			{ path: '/search/:searchValue', element: <SearchResultsPage /> },
			{ path: 'profile', element: <UnderConstructionPage /> },
			{ path: '/favorites', element: <FavoritesPage /> },
		],
	},
]);
