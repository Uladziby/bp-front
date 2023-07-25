/** @format */

import { useEffect, useState } from "react";

export const useGetOffsetWidth = (ref: React.RefObject<HTMLDivElement>, widthElement: number) => {
	const [width, setWidth] = useState(widthElement);

	useEffect(() => {
		const updateWidth = () => {
			setWidth(ref.current!.offsetWidth);
		};

		window.addEventListener("resize", updateWidth);

		updateWidth();

		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}),
		[widthElement];

	return width;
};
