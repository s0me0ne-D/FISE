import React from 'react';

export const PopUpReleaseDate = ({ date }: { date: string }) => {
	return (
		<div>
			<span>Release:</span>
			<span>{date}</span>
		</div>
	);
};
