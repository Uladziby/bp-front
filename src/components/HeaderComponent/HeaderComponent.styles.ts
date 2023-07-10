/** @format */

import styled from "styled-components";
import ADropdownMenu from "components/ADropdownMenu/ADropdownMenu";
import { WIDTH_XL } from "./../../globalStyles";
import { NavHashLink as Link } from "react-router-hash-link";
import { ASwitch } from "components/ASwitch/ASwitch";

export const StyledContainer = styled.header<{ $isScrolling: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	transition: background-color 0.5s;
	background-color: ${(props) => props.theme.colors.gray5};

	box-shadow: ${({ $isScrolling }) => ($isScrolling ? "0 0.5rem 1rem rgba(0, 0, 0, 0.1)" : "")};
`;

export const StyledNavBar = styled.nav<{ $isScrolling: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-inline: auto;
	padding: 0 3rem;
	height: 10rem;
	gap: 1rem;
	border-bottom: 2px solid rgba(255, 255, 255, 0.05);
	transition: height 0.25s;

	height: ${({ $isScrolling }) => ($isScrolling ? "5rem" : "")};
`;

export const StyledLogo = styled.a<{ $isScrolling: boolean }>`
	display: flex;
	font-size: 5rem;
	font-weight: 900;
	color: white;
	cursor: pointer;

	& svg {
		padding-top: ${({ $isScrolling }) => ($isScrolling ? "15px" : "")};
		fill: ${({ theme }) => theme.colors.mauve12};
	}
`;

export const StyledList = styled.ul`
	display: flex;
	list-style: none;
	gap: 5rem;
	margin-left: 5rem;
	margin-right: auto;

	@media screen and (max-width: ${WIDTH_XL}) {
		display: none;
	}
`;

export const StyledListElement = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	text-underline-offset: 1rem;
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 400;
	transition: color 0.25s;

	color: ${({ theme }) => theme.colors.mauve12};

	&.active {
		text-decoration-color: ${(props) => props.theme.colors.slate11};
	}

	&:hover {
		color: ${({ theme }) => theme.colors.indigo11};
		text-decoration-line: underline;
		text-decoration-thickness: 1px;
	}
`;

export const StyledADropdownMenu = styled(ADropdownMenu)`
	@media screen and (min-width: ${WIDTH_XL}) {
		display: none;
	}
`;

export const StyledASwitch = styled(ASwitch)``;
