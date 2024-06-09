import './main.scss';
import { MainCategory } from './MainCategory';
import { Title } from './TitlePage/Title';

const categories = [
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
