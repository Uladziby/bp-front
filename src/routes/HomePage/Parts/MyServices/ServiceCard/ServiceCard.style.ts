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
	top: 0;
	padding: 1rem 3rem;
	min-height: 95%;
`;

export const StyledCard = styled.div.attrs((props) => ({ className: props.className }))<{
	width: number;
	heigth?: number;
}>`
	list-style: none;
	position: relative;
	cursor: pointer;
	transition: all 0.375ms;

	${({ width, heigth }) =>
		heigth
			? { width: `${width}px`, height: `${heigth}px` }
			: { width: `${width}px`, height: `${width}px` }};

	&:hover .card__background {
		transform: scale(1.2) translateZ(0);
	}

	&:hover .card__content ul li {
		transform: scale(1.3);
	}

	&:hover .card__content h2 {
		transform: scale(1.3);
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
	gap: 2rem;
	margin: 0;
	padding: 2rem;
`;

export const StyledListItem = styled.li`
	font-size: 1.5rem;
	line-height: 2rem;
	font-weight: 400;
	text-align: justify;
	color: ${COLOR_PALETTE.white};
`;
