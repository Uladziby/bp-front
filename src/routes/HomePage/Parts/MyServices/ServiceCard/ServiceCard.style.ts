/** @format */

import { ATitle } from "components/ATitle/ATitle";
import { styled } from "styled-components";
import { COLOR_PALETTE } from "utils/colors";

export const StyledATitle = styled(ATitle)<{ isBlur: boolean }>`
	display: flex;
	justify-content: center;
	color: ${COLOR_PALETTE.white};
`;

export const StyledCardContent = styled.div<{ $heightContent: number }>`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	height: ${({ $heightContent }) => `${$heightContent - 50}px`};
	left: 0;
	padding: var(--spacing-l);
	top: 0;
`;

export const StyledCard = styled.div.attrs((props) => ({ className: props.className }))<{
	width: number;
	heigth?: number;
}>`
	list-style: none;
	position: relative;
	cursor: pointer;

	${({ width, heigth }) =>
		heigth
			? { width: `${width}px`, height: `${heigth}px` }
			: { width: `${width}px`, height: `${width}px` }};

	&:hover .card__background {
		transform: scale(1.05) translateZ(0);
	}

	&::before {
		content: "";
		display: block;
		padding-bottom: 150%;
	}
`;
