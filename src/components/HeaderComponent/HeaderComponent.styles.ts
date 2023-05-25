/** @format */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	transition: background-color 0.5s;
	background-color: ${(props) => props.theme.colors.gray5};

	&.active {
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);

		nav {
			height: 5rem;
		}
	}
`;

export const StyledNavBar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-inline: auto;
	padding-inline: 1.5rem;
	height: 10rem;
	gap: 1rem;
	border-bottom: 2px solid rgba(255, 255, 255, 0.05);
	transition: height 0.25s;
`;

export const StyledLogo = styled.a<{ isScrolling: boolean }>`
	display: flex;
	font-size: 5rem;
	font-weight: 900;
	cursor: pointer;

	color: ${({ theme }) => theme.colors.mauve12};
`;

export const StyledList = styled.ul`
	display: flex;
	list-style: none;
	gap: 5rem;
	margin-left: 5rem;
	margin-right: auto;
`;

export const StyledListElement = styled(NavLink)<{ isScrolling: boolean }>`
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
