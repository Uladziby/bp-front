/** @format */

import { ATitle } from "components/ATitle/ATitle";
import { styled } from "styled-components";
import { WIDTH_L } from "globalStyles";

export const StyledContext = styled.div<{ $widthItem?: number }>``;

export const StyledTestiField = styled.img<{ $srcImg: string }>``;

export const StyledATitle = styled(ATitle)`
	color: ${(props) => props.theme.colors.gray8};
	padding: 0rem 3rem;
`;

export const StyledText = styled(ATitle)`
	padding: 0 3rem;
	font-size: 2rem;
	line-height: 14px;

	@media screen and (max-width: ${WIDTH_L}) {
		font-size: 1.2rem;
		line-height: 10px;
	}
`;

export const StyledAuthor = styled(ATitle)`
	padding: 0 3rem;
	color: ${({ theme }) => theme.colors.mauve12};
`;
