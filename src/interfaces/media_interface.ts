export interface Media {
	backdrop_path: string;
	id: number;
	original_title?: string;
	original_name?: string;
	overview: string;
	poster_path: string;
	media_type: 'movie' | 'tv';
	adult: boolean;
	name?: string;
	title?: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date?: Date;
	first_air_date?: Date;
	video?: boolean;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
}
