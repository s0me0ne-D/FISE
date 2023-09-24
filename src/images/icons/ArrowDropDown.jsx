export const ArrowDropDown = ({ currentLink, setCurrentLink, setNotActiveLink }) => {
	const getParentLink = (event) => {
		if (currentLink !== event.target.parentNode.textContent) {
			setCurrentLink(event.target.parentNode.textContent);
		} else {
			setCurrentLink("");
			setNotActiveLink("");
		}
		event.stopPropagation();
	};

	return (
		<svg onClick={getParentLink} height="15" viewBox="0 -960 960 960" width="15" fill="#e5e5e5">
			<path d="M480-360 280-560h400L480-360Z" />
		</svg>
	);
};
