/** @format */

import { slate } from "@radix-ui/colors";
import { AButton } from "components/AButton/AButton";
import { styled } from "styled-components";

export const StyledContainer = styled.div<{ $width: number }>`
	width: ${({ $width }) => `${$width}px`};
	height: ${({ $width }) => `${$width}px`};
`;

export const StyledContent = styled.div`
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center;
	transform: rotate(90deg);
`;

export const StyledAButton = styled(AButton)`
	position: fixed;
	top: 3%;
	left: 2%;
	background-color: transparent;
	color: ${slate.slate1};
`;