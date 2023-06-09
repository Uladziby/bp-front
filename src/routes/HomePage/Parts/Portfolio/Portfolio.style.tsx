/** @format */

import { styled } from "styled-components";

export const StyledSlider = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	max-height: calc(100vw - 120px);
	overflow-y: auto;
	overflow-x: hidden;
	transform: rotate(-90deg) translateY(-450px);
	transform-origin: right top;
	box-sizing: border-box;
	scroll-behavior: smooth;

	&::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}
`;

export const StyledContent = styled.div`
	position: relative;
	height: 500px;
`;

export const StyledCardsContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
`;
