/** @format */

import { styled } from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const StyledNavHashLink = styled(NavHashLink)`
	position: relative;
	display: flex;
	align-items: center;
	font-size: 1.5rem;
	color: var(--violet11);
	border-radius: 3px;
	height: 25px;
	padding: 0 5 0 25px;
	user-select: none;
	outline: none;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.mauve2};
	}
`;
