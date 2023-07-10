/** @format */

import styled from "styled-components";

export const StyledWrapper = styled.div<{ $width: number }>`
	overflow: auto;
	scroll-behavior: smooth;
	width: ${({ $width }) => `${$width}px`};

	&::-webkit-scrollbar {
		width: 1px;
		height: 1px;
	}
`;

export const StyledHeader = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

export const StyledContext = styled.div`
	display: flex;
	gap: 120px;
`;
