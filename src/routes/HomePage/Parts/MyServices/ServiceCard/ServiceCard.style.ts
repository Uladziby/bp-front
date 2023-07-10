/** @format */

import { ATitle } from "components/ATitle/ATitle";
import { styled } from "styled-components";
import { COLOR_PALETTE } from "utils/colors";

export const StyledATitle = styled(ATitle)<{ isBlur: boolean }>`
	display: flex;
	justify-content: center;
	text-align: center;
	color: ${COLOR_PALETTE.white};
	margin: 0;
`;

export const StyledCardContent = styled.div<{ $heightContent: number }>`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	min-height: ${({ $heightContent }) => `${$heightContent - 50}px`};
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
		transform: scale(1.1) translateZ(0);
	}

	&::before {
		content: "";
		display: block;
		padding-bottom: 150%;
	}
`;

export const StyledList = styled.ul`
	list-style: inside;
	list-style-position: outside;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1rem;
	margin: 0;
	padding: 1rem;
`;

export const StyledListItem = styled.li`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 400;
	color: ${COLOR_PALETTE.white};
`;
