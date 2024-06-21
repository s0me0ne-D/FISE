import './main.scss';
import { MainCategory } from './MainCategory';
import { Title } from './TitlePage/Title';

type CategoryType = 'popular' | 'top_rated' | 'upcoming';
type CategoryTitle = 'Movies' | 'TV Shows';
type MediaType = 'tv' | 'movie';

interface Category {
	category: CategoryType;
	title: CategoryTitle;
	mediaType: MediaType;
}

const categories: Category[] = [
	{
		category: 'popular',
		title: 'Movies',
		mediaType: 'movie',
	},
	{
		category: 'popular',
		title: 'TV Shows',
		mediaType: 'tv',
	},
	{
		category: 'top_rated',
		title: 'Movies',
		mediaType: 'movie',
	},
	{
		category: 'top_rated',
		title: 'TV Shows',
		mediaType: 'tv',
	},
	{
		category: 'upcoming',
		title: 'Movies',
		mediaType: 'movie',
	},
];

export const MainPage = () => {
	return (
		<main className='main'>
			<Title />
			<div className='main-list'>
				{categories.map((category) => (
					<MainCategory
						category={category.category}
						mediaType={category.mediaType}
						title={category.title}
						key={category.category + category.mediaType}
					/>
				))}
			</div>
		</main>
	);
};
