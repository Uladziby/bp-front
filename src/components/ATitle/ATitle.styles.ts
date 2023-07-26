/** @format */

import styled from "styled-components";

export const StyledTitle = styled.h2<{
	size: number;
	weight: number;
	lineheight: number;
	$marginBottom?: number;
	color?: string;
	$fontFamily?: "Cormorant Garamond" | "Manrope";
}>`
	font-size: ${({ size }) => size}px;
	font-weight: ${({ weight }) => weight};
	line-height: ${({ lineheight }) => lineheight}px;
	margin-bottom: ${({ $marginBottom }) => $marginBottom}px;
	color: ${({ color }) => color};
	font-family: ${({ $fontFamily }) => $fontFamily};
`;
