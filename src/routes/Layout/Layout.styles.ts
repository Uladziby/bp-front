/** @format */

import styled from "styled-components";

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	width: inherit;
	font-size: 50px;
	background-color: ${({ theme }) => theme.colors.gray2};
`;
