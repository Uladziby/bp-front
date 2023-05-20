/** @format */

import { useEffect, useState } from "react";

export const useScrollingHeader = () => {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const windowPosition = window.scrollY > 250;
			setIsScrolling(windowPosition);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return isScrolling;
};
