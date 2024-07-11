import React from 'react';

export const PopUpReleaseDate = ({ date }: { date: string }) => {
	return (
		<div>
			Release:<span>{date}</span>
		</div>
	);
};
