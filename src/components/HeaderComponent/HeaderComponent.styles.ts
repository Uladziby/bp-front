/** @format */
import styled from "styled-components";

export const StyledContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	transition: background-color 0.5s;
	background-color: ${(props) => props.theme.colors.slate2};
`;

export const StyledNavBar = styled.nav`
	max-width: 150rem;
	margin-inline: auto;
	padding-inline: 1.5rem;

	height: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 2px solid rgba(255, 255, 255, 0.05);
	transition: height 0.25s;
`;

export const StyledLogo = styled.a`
	display: flex;
	font-size: 5rem;
	font-weight: 900;
	color: ${(props) => props.theme.colors.indigo12};
	cursor: pointer;
`;

export const StyledList = styled.ul`
	display: flex;
	list-style: none;
	gap: 5rem;
	margin-left: 5rem;
	margin-right: auto;
`;

export const StyledListElement = styled.a`
	display: flex;
	font-size: 2rem;
	font-weight: 600;

	transition: color 0.25s;

	text-decoration: none;

	&:hover {
		color: ${(props) => props.theme.colors.slate11};
	}
`;
