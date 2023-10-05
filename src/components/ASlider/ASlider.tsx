/** @format */

import { ReactNode, SyntheticEvent, useEffect, useState } from "react";
import {
	StyledContainer,
	StyledLeftAButton,
	StyledRightAButton,
	StyledSlider,
} from "./ASlider.style";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";
import { useWindowSize } from "utils/CustomHooks/useWindowSize";

interface ISliderProps {
	children: ReactNode | ReactNode[];
	className?: string;
	widthItem: number;
	heightItem: number;
}

export const ASlider = ({ children, widthItem, heightItem }: ISliderProps) => {
	const [currentPosition, setCurrentPosition] = useState<number>(0);
	const [isScrollEnd, setIsScrollEnd] = useState<boolean>(false);
	const [isScrollStart, setIsScrollStart] = useState<boolean>(true);
	const sliderRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
	const { width } = useWindowSize();

	const onScrollTargetCard = () => {
		if (sliderRef.current) {
			const maxScroll = sliderRef.current.scrollHeight - sliderRef.current.clientHeight;
			setIsScrollStart(currentPosition <= 0);
			setIsScrollEnd(currentPosition > maxScroll);
		}
	};

	const scrollHandler = (event: SyntheticEvent) => {
		const scrollPosition = event.currentTarget.scrollTop;
		const maxScroll = sliderRef.current.scrollHeight - sliderRef.current.clientHeight;

		setIsScrollStart(false);
		setIsScrollEnd(false);

		if (scrollPosition + 1 >= maxScroll) {
			setIsScrollEnd(true);
		}
		if (scrollPosition <= 0) {
			setIsScrollStart(true);
		}
	};

	const onSlideRight = () => {
<<<<<<< HEAD
		setCurrentPosition(sliderRef.current.scrollTop + widthItem);

=======
		const nextPosition = sliderRef.current.scrollTop + widthCard;

		setCurrentPosition(nextPosition);
>>>>>>> 8dca4c7 (feat : added LoginPage)
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ top: widthItem, behavior: "smooth" });
		}
	};

	const onSlideLeft = () => {
<<<<<<< HEAD
		setCurrentPosition(sliderRef.current.scrollTop - widthItem);

=======
		const nextPosition = sliderRef.current.scrollTop - widthCard;

		setCurrentPosition(nextPosition);
>>>>>>> 8dca4c7 (feat : added LoginPage)
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ top: -widthItem, behavior: "smooth" });
		}
	};

	useEffect(() => {
		onScrollTargetCard();
<<<<<<< HEAD
	}, [currentPosition, width]);
=======
	}, [currentPosition]);
>>>>>>> 8dca4c7 (feat : added LoginPage)

	return (
		<StyledContainer $heightContent={heightItem} $widthVisiblePart={width}>
			<StyledLeftAButton onClick={onSlideLeft} ishidden={isScrollStart} size="extraSmall">
				<ChevronLeftIcon />
			</StyledLeftAButton>
			<StyledSlider
				onScroll={scrollHandler}
				ref={sliderRef}
				$widthItem={widthItem}
				$widthVisiblePart={width}
			>
				{children}
			</StyledSlider>
			<StyledRightAButton onClick={onSlideRight} ishidden={isScrollEnd} size="extraSmall">
				<ChevronRightIcon />
			</StyledRightAButton>
		</StyledContainer>
	);
};
