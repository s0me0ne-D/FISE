import { useEffect, useState } from 'react';

export const useFilterOptionsByYear = () => {
	const [years, setYears] = useState([]);

	useEffect(() => {
		const currentYear = new Date().getFullYear();
		for (let i = 0; i <= 15; i++) {
			setYears((prev) => [...prev, currentYear - i]);
		}
	}, []);
	return years;
};
