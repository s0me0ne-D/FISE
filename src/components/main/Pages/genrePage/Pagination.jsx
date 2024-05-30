import { useEffect, useState } from 'react';
import './pagination.scss';
import { ArrowBack } from '../../../../images/icons/ArrowBack';
import { ArrowForward } from '../../../../images/icons/ArrowForward';
import { FirstPageArrows } from '../../../../images/icons/FirstPageArrows';
import { LastPageArrows } from '../../../../images/icons/LastPageArrows';

export const Pagination = ({ totalPages, currentPage, changePage }) => {
	const [paginationLength, setPaginationLength] = useState([]);
	useEffect(() => {
		if (paginationLength.length !== totalPages) {
			const newPaginationLength = [];
			for (let i = 1; i <= totalPages; i++) {
				newPaginationLength.push(i);
			}
			setPaginationLength(newPaginationLength);
		}
	}, [paginationLength.length, totalPages]);
	return (
		<div className='main-genre-pagination'>
			{paginationLength ? (
				<div className='numbers'>
					<div
						className='arrow'
						onClick={() => changePage(currentPage - 20 > 1 ? currentPage - 20 : 1)}
					>
						<FirstPageArrows />
					</div>
					<div
						className='arrow'
						onClick={() => {
							if (currentPage > 1) {
								changePage(currentPage - 1);
							}
						}}
					>
						<ArrowBack />
					</div>
					{paginationLength.map((page, index) => {
						if (currentPage < 6) {
							if (page < 11) {
								return (
									<span
										key={index}
										className={`pagination-page ${currentPage === page ? 'active' : ''}`}
										onClick={(event) => {
											changePage(Number(event.target.textContent));
										}}
									>
										{page}{' '}
									</span>
								);
							}
						}
						if (page < currentPage + 5 && page > currentPage - 5) {
							return (
								<span
									key={index}
									className={`pagination-page ${currentPage === page ? 'active' : ''}`}
									onClick={(event) => {
										changePage(Number(event.target.textContent));
									}}
								>
									{page}{' '}
								</span>
							);
						} else {
							return null;
						}
					})}
					<div
						className='arrow'
						onClick={() => {
							if (currentPage < totalPages) {
								changePage(changePage + 1);
							}
						}}
					>
						<ArrowForward />
					</div>
					<div
						className='arrow'
						onClick={() =>
							changePage(currentPage + 20 < totalPages ? currentPage + 20 : totalPages)
						}
					>
						<LastPageArrows />
					</div>
				</div>
			) : null}
		</div>
	);
};
