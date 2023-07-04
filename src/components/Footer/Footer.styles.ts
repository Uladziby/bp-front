/** @format */

import { ATitle } from "components/ATitle/ATitle";
import styled from "styled-components";

export const FooterContainer = styled.footer`
	background-color: ${(props) => props.theme.colors.gray5};
	padding: 2rem;
	text-align: center;
`;

export const FooterText = styled.p`
	color: #888;
	font-size: 1.5rem;
`;

export const FooterLink = styled.a`
	color: #888;
	text-decoration: none;
`;

export const SocialIcons = styled.div`
	margin-top: 10px;
`;

export const StyledIconLink = styled.a`
	display: flex;
	align-items: center;
	color: #888;
	text-decoration: none;
	margin-right: 10px;
	gap: 1rem;
`;

export const StyledATitle = styled(ATitle)`
	font-size: 1.5rem;
	&:hover {
		color: ${({ theme }) => theme.colors.indigo11};
	}
`;
