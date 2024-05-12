import { useState, useEffect } from "react";
import { ArrowBack } from "../../../images/icons/ArrowBack";
import { ArrowForward } from "../../../images/icons/ArrowForward";
import "./titleSlider.scss";
import { TitleSliderMediaPoster } from "./TitleSliderMediaPoster";

export const TitleSlider = ({ allTranding, currentMovieIndex }) => {
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
			if (windowSize < 1451 && windowSize > 1101) {
				setSliderTransform(11);
			} else if (windowSize < 1101) {
				setSliderTransform(12);
			} else {
				setSliderTransform(8);
			}
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
							<TitleSliderMediaPoster
								movie={movie}
								index={index}
								currentMovieIndex={currentMovieIndex}
							/>
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
