/** @format */

import styled from "styled-components";

export const StyledImage = styled.img<{ src: string }>`
	object-fit: contain;
	width: 100%;
	height: 100%;
`;

export const StyledContainer = styled.div<{ $width: number; $height?: number }>`
	min-width: ${({ $width }) => `${$width}px`};
	height: ${({ $height }) => ($height ? `${$height}px` : "auto")};

	width: 50%;
	border-radius: 6px;
	overflow: hidden;
`;
