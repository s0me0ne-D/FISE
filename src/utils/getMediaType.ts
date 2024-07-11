import { Media, MediaType } from '../interfaces/media_interface';

export const getMediaType = (media: Media) => {
	const mediaType: MediaType = media.original_name ? 'tv' : 'movie';
	return mediaType;
};
