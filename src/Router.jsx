import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { MainPage } from "./components/main/Main";
import { fetchAllTranding } from "./fetch/fetchAllTranding";
import { MovieDetailsPage } from "./components/main/Pages/MovieDetailsPage";
import { TvDetailsPage } from "./components/main/Pages/TvDetailsPage";
import { MediaGenrePage } from "./components/main/Pages/genrePage/MediaGenrePage";
import { MediaCategoriePage } from "./components/main/Pages/MediaCategoriePage";
import { SearchResultsPage } from "./components/main/Pages/SearchResultsPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <MainPage />,
				loader: fetchAllTranding,
			},
			{
				path: "/movie/id/:movieId",
				element: <MovieDetailsPage />,
			},
			{
				path: "/tv/id/:tvId",
				element: <TvDetailsPage />,
			},
			{
				path: "/movie/genre/:genreId",
				element: <MediaGenrePage media_type={"movie"} />,
			},
			{
				path: "/tv/genre/:genreId",
				element: <MediaGenrePage media_type={"tv"} />,
			},
			{ path: "/movie/:categorieId", element: <MediaCategoriePage media_type={"movie"} /> },
			{ path: "/tv/:categorieId", element: <MediaCategoriePage media_type={"tv"} /> },
			{ path: "/search/:searchValue", element: <SearchResultsPage /> },
		],
	},
]);
