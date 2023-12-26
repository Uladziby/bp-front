/** @format */

import { AButton } from "components/AButton/AButton";
import styled from "styled-components";
import { COLOR_PALETTE } from "utils/colors";

export const StyledSlider = styled.div<{ $widthItem: number; $widthVisiblePart: number }>`
	overflow-y: auto;
	overflow-x: hidden;
	transform: rotate(-90deg) translateY(-${({ $widthItem }) => $widthItem}px);
	transform-origin: right top;
	box-sizing: border-box;
	scroll-behavior: smooth;
	z-index: 10;

	height: calc(${({ $widthVisiblePart }) => $widthVisiblePart + 5}px - 10vw);
	max-height: ${({ $widthItem }) => $widthItem * 3}px;

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
`;

export const StyledContainer = styled.div<{ $heightContent: number; $widthVisiblePart: number }>`
	position: relative;
	display: flex;
	height: ${({ $heightContent }) => $heightContent}px;
	width: calc(${({ $widthVisiblePart }) => $widthVisiblePart}px - 5vw);
	max-width: ${({ $heightContent }) => $heightContent * 3}px;
	min-width: ${({ $heightContent }) => $heightContent}px;
	overflow: hidden;
`;

export const StyledRightAButton = styled(AButton)`
	position: absolute;
	z-index: 12;
	top: 50%;
	right: 2%;

	border-radius: 4px;
	padding: 10px 15px;
	opacity: 0.5;
	background-color: ${COLOR_PALETTE.white};
`;

export const StyledLeftAButton = styled(AButton)`
	position: absolute;
	z-index: 12;
	top: 50%;
	left: 3%;

	border-radius: 4px;
	padding: 10px 15px;
	opacity: 0.5;
	background-color: ${COLOR_PALETTE.white};
`;
