/** @format */

import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAMotionSection = styled(AMotionSection)`
	background-color: ${({ theme }) => theme.colors.gray3};
`;

export const CardsContainer = styled(motion.div)<{ width: number }>`
	display: grid;
	grid-row-gap: var(--spacing-l);

	&:hover {
		.card:not(:hover) .card__background {
			filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
		}
		.card:not(:hover) .card__content h2 {
			color: transparent;
			text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
		}
	}

	@media (min-width: 320px) {
		grid-column-gap: var(--spacing-l);
		grid-template-columns: repeat(1, ${({ width }) => `${width}px`});
	}

	@media (min-width: 720px) {
		grid-template-columns: repeat(2, ${({ width }) => `${width}px`});
	}

	@media (min-width: 1250px) {
		grid-template-columns: repeat(3, ${({ width }) => `${width}px`});
	}
`;

export const StyledBackground = styled.div.attrs((props) => ({ className: props.className }))<{
	background: string;
}>`
	background-size: cover;
	background-position: center;
	border-radius: var(--spacing-l);
	bottom: 0;
	filter: brightness(0.75) saturate(1.2) contrast(0.85);
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
	transform-origin: center;
	transform: scale(1) translateZ(0);
	transition: filter 200ms linear, transform 200ms linear;

	background-image: url(${({ background }) => background});
`;
