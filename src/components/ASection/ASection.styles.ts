/** @format */

import { ATitle } from "components/ATitle/ATitle";
import { styled } from "styled-components";

export const StyledContainer = styled.section`
	display: flex;
	align-items: center;
	padding: 3rem 5% 10rem;
	flex-direction: column;
`;

export const StyledContext = styled.div`
	display: flex;
	justify-content: center;
	width: 103%;
	gap: 3rem;
`;

export const StyledATitle = styled(ATitle)`
	color: ${({ theme }) => theme.colors.mauve12};
	justify-content: center;
	display: flex;
`;
