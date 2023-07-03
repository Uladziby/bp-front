/** @format */

import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { BUTTON_COLORS } from "utils/colors";
import { BORDER_RADIUS_ENUM } from "utils/styles";

const {
	secondaryDisabled,
	primaryHover,
	disabled,
	primaryDisabled,
	secondaryDefault,
	secondaryHover,
	basicWhite,
	defaultFill,
} = BUTTON_COLORS;

const VARIANT = {
	primary: css`
		background: ${({ theme }) => theme.colors.mavue11};
		color: ${({ theme }) => theme.colors.mauve12};

		:hover {
			background: ${primaryHover};
		}

		:disabled {
			background: ${primaryDisabled};
			color: ${disabled};
			fill: ${disabled};
		}
	`,
	secondary: css`
		background: ${secondaryDefault};

		:hover {
			background: ${secondaryHover};
		}

		:disabled {
			background: ${secondaryDisabled};
			color: ${disabled};
			fill: ${disabled};
		}
	`,
};

const SIZE = {
	extraSmall: css`
		width: 4rem;
		height: 4rem;
		border-radius: ${BORDER_RADIUS_ENUM.LARGE};
	`,
	small: css`
		height: 4rem;
		width: 15rem;
		border-radius: ${BORDER_RADIUS_ENUM.SMALL};
	`,
	medium: css`
		height: 5rem;
		width: 25rem;
		border-radius: ${BORDER_RADIUS_ENUM.MEDIUM};
	`,
	large: css`
		height: 5rem;
		width: 30rem;
		border-radius: ${BORDER_RADIUS_ENUM.LARGE};
	`,
};

export const StyledButton = styled(motion.button)<{
	variant?: "primary" | "secondary";
	size?: "extraSmall" | "small" | "medium" | "large";
	$isActive?: boolean;
	$ishidden?: boolean;
}>`
	all: unset;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;
	background-color: transparent;
	font-weight: 500;
	font-size: 1.5rem;
	line-height: 1;
	cursor: pointer;

	box-shadow: 0 2px 10px ${({ theme }) => theme.colors.slate7};

	${({ variant }) => variant && VARIANT[variant]};
	${({ size }) => size && SIZE[size]};
	fill: ${({ $isActive }) => ($isActive ? basicWhite : defaultFill)};
	${({ variant }) => variant && VARIANT[variant]};
	visibility: ${({ $ishidden }) => (!$ishidden ? "visible" : "hidden")};

	&:hover {
		background-color: ${({ theme }) => theme.colors.slate7};
		color: ${({ theme }) => theme.colors.indigo11};
	}
`;
