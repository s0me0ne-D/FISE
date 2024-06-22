import { NavLink } from 'react-router-dom';
import './title.scss';
import { MoreInfo } from '../../../assets/icons/MoreInfo';
import { Media } from '../../../interfaces/media_interface';

interface TitleDescriptionProps {
	currentMedia: Media;
}

export const TitleDescription = ({ currentMedia }: TitleDescriptionProps) => {
	return (
		<div className='title'>
			<div className='title-name'>
				{currentMedia.media_type === 'movie' ? `${currentMedia.title}` : `${currentMedia.name}`}
			</div>
			<NavLink className='title-more-info' to={currentMedia.media_type + '/id/' + currentMedia.id}>
				<MoreInfo />
				More Info
			</NavLink>
		</div>
	);
};
