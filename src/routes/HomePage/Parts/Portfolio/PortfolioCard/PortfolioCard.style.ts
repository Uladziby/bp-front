/** @format */

import { slate } from "@radix-ui/colors";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { AButton } from "components/AButton/AButton";
import { styled } from "styled-components";

export const StyledContainer = styled.div<{ $width: number; $height: number }>`
	min-width: ${({ $width }) => `${$width}px`};
	min-height: ${({ $width }) => `${$width}px`};
`;

export const StyledContent = styled.div`
	width: 350px;
	height: 350px;
	background-size: contain;
	background-repeat: no-repeat;
	object-fit: cover;
	transform: rotate(90deg);
	background-position: center center;
`;

export const StyledAButton = styled(AButton)`
	position: fixed;
	top: 85%;
	left: 27%;
	background-color: transparent;
	color: ${slate.slate1};
`;
