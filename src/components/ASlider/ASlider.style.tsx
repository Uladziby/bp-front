/** @format */

import { AButton } from "components/AButton/AButton";
import styled from "styled-components";

export const StyledSlider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	max-height: 84vw;
	overflow-y: auto;
	overflow-x: hidden;
	transform: rotate(-90deg) translateY(-450px);
	transform-origin: right top;
	box-sizing: border-box;
	scroll-behavior: smooth;
	z-index: 1;

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
`;

export const StyledContent = styled.div`
	position: relative;
	height: 455px;
	width: inherit;
`;

export const StyledCardsContainer = styled.div`
	display: flex;
	width: 100%;
	position: relative;
`;

export const StyledRightAButton = styled(AButton)`
	position: absolute;
	z-index: 2;
	top: 50%;
	right: 10%;

	border-radius: 4px;
	padding: 10px 15px;
	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	user-select: none;
	animation-duration: 400ms;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
	will-change: transform, opacity;
	background-color: white;
	opacity: 0.5;
`;
export const StyledLeftAButton = styled(AButton)`
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 2%;

	border-radius: 4px;
	padding: 10px 15px;
	/* 	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	user-select: none;
	animation-duration: 400ms;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
	will-change: transform, opacity; */

	background-color: white;
	opacity: 0.5;
`;
