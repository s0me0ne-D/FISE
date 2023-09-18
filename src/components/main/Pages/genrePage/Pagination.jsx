import { useEffect, useState } from "react";
import "./pagination.scss";
import { ArrowBack } from "../../../../images/icons/ArrowBack";
import { ArrowForward } from "../../../../images/icons/ArrowForward";
import { FirstPageArrows } from "../../../../images/icons/FirstPageArrows";
import { LastPageArrows } from "../../../../images/icons/LastPageArrows";

export const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
	const [painationLength, setPaginationLength] = useState([]);

	useEffect(() => {
		if (painationLength.length === 0) {
			const newPaginationLength = [];
			for (let i = 1; i <= totalPages; i++) {
				newPaginationLength.push(i);
			}
			setPaginationLength(newPaginationLength);
		}
	}, [painationLength, totalPages]);
	return (
		<div className="main-genre-pagination">
			{painationLength ? (
				<div className="numbers">
					<div className="arrow" onClick={() => setCurrentPage(1)}>
						<FirstPageArrows />
					</div>
					<div
						className="arrow"
						onClick={() => {
							if (currentPage > 1) {
								setCurrentPage((prev) => prev - 1);
							}
						}}
					>
						<ArrowBack />
					</div>
					{painationLength.map((page, index) => {
						if (currentPage < 6) {
							if (page < 11) {
								return (
									<span
										key={index}
										className={`pagination-page ${currentPage === page ? "active" : ""}`}
										onClick={(event) => {
											setCurrentPage(Number(event.target.textContent));
										}}
									>
										{page}{" "}
									</span>
								);
							}
						}
						if (page < currentPage + 5 && page > currentPage - 5) {
							return (
								<span
									key={index}
									className={`pagination-page ${currentPage === page ? "active" : ""}`}
									onClick={(event) => {
										setCurrentPage(Number(event.target.textContent));
									}}
								>
									{page}{" "}
								</span>
							);
						}
					})}
					<div
						className="arrow"
						onClick={() => {
							if (currentPage < totalPages) {
								setCurrentPage((prev) => prev + 1);
							}
						}}
					>
						<ArrowForward />
					</div>
					<div className="arrow" onClick={() => setCurrentPage(totalPages)}>
						<LastPageArrows />
					</div>
				</div>
			) : null}
		</div>
	);
};
