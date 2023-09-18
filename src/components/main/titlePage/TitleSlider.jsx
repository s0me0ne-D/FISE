import { useState, useEffect } from "react";
import { ArrowBack } from "../../../images/icons/ArrowBack";
import { ArrowForward } from "../../../images/icons/ArrowForward";
import { URL } from "../../../store/URL_SORE";
import "./titleSlider.scss";
import { NavLink } from "react-router-dom";

export const TitleSlider = ({ allTranding, currentMovieIndex }) => {
	const { ORIGINAL_IMG_URL } = URL;
	const [sliderTransform, setSliderTransform] = useState(0);
	const [transformCounter, setTransformCounter] = useState(null);
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const style = {
		transform: `translate(-${sliderTransform * 110}px)`,
	};
	//get window size
	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	useEffect(() => {
		if (windowSize < 1451 && windowSize > 1101) {
			setTransformCounter(11);
		} else if (windowSize < 1101) {
			setTransformCounter(12);
		} else {
			setTransformCounter(8);
		}
	}, [windowSize]);
	const forwardSliderTransform = () => {
		if (sliderTransform < transformCounter) {
			setSliderTransform(sliderTransform + 1);
		} else {
			setSliderTransform(0);
		}
	};
	const backSliderTransform = () => {
		if (sliderTransform === 0) {
			setSliderTransform(8);
		} else {
			setSliderTransform(sliderTransform - 1);
		}
	};
	return (
		<div className="title-slider">
			<button className="arrow-back" onClick={backSliderTransform}>
				<ArrowBack />
			</button>
			<div className="title-slider-container">
				<div className="slider-wrap" style={style}>
					{allTranding.map((movie, index) => (
						<div className="title-poster-block" key={movie.id}>
							{" "}
							<NavLink to={`/${movie.media_type}/id/${movie.id}`}>
								{" "}
								<img
									className={`title-slider-poster ${index === currentMovieIndex ? "active" : ""}`}
									src={ORIGINAL_IMG_URL + movie.poster_path}
									alt="poster"
									title={movie.name ? movie.name : movie.title}
								/>
							</NavLink>
						</div>
					))}
				</div>
			</div>
			<button className="arrow-forward" onClick={forwardSliderTransform}>
				<ArrowForward />
			</button>
		</div>
	);
};
