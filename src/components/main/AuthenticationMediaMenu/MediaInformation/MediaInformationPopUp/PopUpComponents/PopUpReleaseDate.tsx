import React from 'react';

export const PopUpReleaseDate = ({ date }: { date: string }) => {
	return (
		<div className='information-popup_release'>
			<span>Release:</span>
			<span>{date}</span>
		</div>
	);
};
