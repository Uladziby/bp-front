/** @format */

import { ATitle } from "components/ATitle/ATitle";
import styled from "styled-components";

export const StyledContainer = styled.image`
	padding: 18rem 0 5rem;
	background: center;
	background-size: 500px;
	opacity: 0.5;
	height: 60vh;
	background-repeat: no-repeat;
	background-color: ${({ theme }) => theme.colors.gray2};
`;

export const StyledTitle = styled(ATitle)`
	margin-top: 10rem;
	display: flex;
`;
