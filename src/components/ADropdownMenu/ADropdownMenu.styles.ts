/** @format */

import { styled } from "styled-components";
import { NavHashLink } from "react-router-hash-link";
import { Content } from "@radix-ui/react-dropdown-menu";

export const StyledNavHashLink = styled(NavHashLink)`
	position: relative;
	display: flex;
	align-items: center;
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.mauve12};
	border-radius: 4px;
	user-select: none;
	outline: none;
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.indigo11};
	}
`;

export const StyledDropDownMenuContent = styled(Content)`
	position: relative;
	display: flex;
	flex-direction: column;
	min-width: 140px;
	gap: 2rem;
	z-index: 100;
	padding: 2rem 1rem;

	background-color: ${(props) => props.theme.colors.mauve4};
`;
