/** @format */

import { ReactNode, SyntheticEvent, useEffect, useState } from "react";
import {
	StyledCardsContainer,
	StyledContent,
	StyledLeftAButton,
	StyledRightAButton,
	StyledSlider,
} from "./ASlider.style";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import React from "react";

interface ISliderProps {
	children: ReactNode | ReactNode[];
	className?: string;
	widthItem?: string;
}

export const ASlider = ({ children }: ISliderProps) => {
	const sliderRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
	const [currentPosition, setCurrentPosition] = useState<number>(0);
	const [isScrollEnd, setIsScrollEnd] = useState<boolean>(false);
	const [isScrollStart, setIsScrollStart] = useState<boolean>(true);

	const widthCard = 450;
	const scrollThreshold = 132;

	const onScrollTargetCard = () => {
		if (sliderRef.current) {
			const maxScroll = sliderRef.current.scrollHeight - sliderRef.current.clientHeight;

			setIsScrollStart(currentPosition <= scrollThreshold);
			setIsScrollEnd(currentPosition >= maxScroll);
		}
	};

	useEffect(() => {
		onScrollTargetCard();
	}, [currentPosition]);

	const scrollHandler = (event: SyntheticEvent) => {
		const scrollPosition = event.currentTarget.scrollTop;
		const offsetHeight = sliderRef.current.offsetHeight;
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
		setCurrentPosition(sliderRef.current.scrollTop + widthCard);
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ top: widthCard, behavior: "smooth" });
		}
	};

	const onSlideLeft = () => {
		setCurrentPosition(sliderRef.current.scrollTop - widthCard);
		if (sliderRef.current) {
			sliderRef.current.scrollBy({ top: -widthCard, behavior: "smooth" });
		}
	};

	return (
		<StyledCardsContainer>
			<StyledLeftAButton onClick={onSlideLeft} ishidden={isScrollStart} size="extraSmall">
				<ChevronLeftIcon />
			</StyledLeftAButton>
			<StyledContent>
				<StyledSlider onScroll={scrollHandler} ref={sliderRef}>
					{children}
				</StyledSlider>
			</StyledContent>
			<StyledRightAButton onClick={onSlideRight} ishidden={isScrollEnd} size="extraSmall">
				<ChevronRightIcon />
			</StyledRightAButton>
		</StyledCardsContainer>
	);
};
