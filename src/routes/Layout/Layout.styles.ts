/** @format */

import styled from "styled-components";

export const StyledContainer = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: inherit;
	min-height: 86vh;

	background-color: ${(props) => props.theme.colors.gray2};
`;
