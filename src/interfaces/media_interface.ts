export interface Media {
	backdrop_path: string;
	id: number;
	original_title?: string;
	original_name?: string;
	overview: string;
	poster_path: string;
	media_type: MediaType;
	adult: boolean;
	name?: string;
	title?: string;
	original_language: string;
	genre_ids: number[];
	popularity: number;
	release_date?: string;
	first_air_date?: string;
	video?: boolean;
	vote_average: number;
	vote_count: number;
	origin_country?: string[];
}

export type MediaType = 'movie' | 'tv';

export interface MediaDetails {
	adult: boolean;
	backdrop_path: string;
	created_by: CreatedBy;
	episode_run_time: number[];
	first_air_date: string;
	belongs_to_collection?: null;
	budget?: number;
	genres: Genre[];
	homepage: string;
	id: number;
	in_production?: boolean;
	languages?: string[];
	last_air_date?: string;
	last_episode_to_air?: TEpisodeToAir;
	next_episode_to_air?: TEpisodeToAir;
	imdb_id?: string;
	name?: string;
	networks?: Network[];
	origin_country: string[];
	original_language: string;
	original_name?: string;
	original_title?: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: ProductionCompany[];
	production_countries: ProductionCountry[];
	release_date?: string;
	revenue?: number;
	runtime?: number;
	spoken_languages: SpokenLanguage[];
	status: string;
	tagline: string;
	title?: string;
	seasons?: Season[];
	type?: string;
	video?: boolean;
	vote_average: number;
	vote_count: number;
}

export interface Season {
	air_date: string | null;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: null | string;
	season_number: number;
	vote_average: number;
}
export interface Network {
	id: number;
	logo_path: null | string;
	name: string;
	origin_country: string;
}
export interface CreatedBy {
	id: number;
	credit_id: string;
	name: string;
	original_name: string;
	gender: number;
	profile_path: string;
}

export interface TEpisodeToAir {
	id: number;
	overview: string;
	name: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime: number | null;
	season_number: number;
	show_id: number;
	still_path: string;
}
export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export interface ProductionCountry {
	iso_3166_1: string;
	name: string;
}

export interface SpokenLanguage {
	english_name: string;
	iso_639_1: string;
	name: string;
}
