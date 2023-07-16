/** @format */

import styled from "styled-components";

export const StyledImage = styled.img<{ src: string }>`
	object-fit: cover;
	width: 100%;
	height: 85%;
`;

export const StyledContainer = styled.div<{ $width: number }>`
	min-width: ${({ $width }) => `${$width}px`};
	width: 50%;
	border-radius: 6px;
	overflow: hidden;
`;
