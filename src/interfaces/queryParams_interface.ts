import { MediaType } from './media_interface';

export interface QueryParams {
	mediaType?: MediaType;
	pageNumber?: number;
	genreId?: number;
	filterByReleaseYear?: string;
	sortBy?: string;
	category?: string;
	id?: string | number | undefined;
	searchValue?: string;
	currentPage?: number;
}
