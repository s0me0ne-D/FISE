import React from 'react';
import ContentLoader from 'react-content-loader';

export const Loader = ({ className, height }: { className: string; height?: number }) => (
	<ContentLoader
		speed={2}
		width={'100%'}
		height={height}
		viewBox='0 0 100 150'
		backgroundColor='#404040'
		foregroundColor='#616161'
		className={className}
	>
		<rect x='0' y='0' rx='2' ry='2' width='400' height='400' />
	</ContentLoader>
);

export default Loader;
