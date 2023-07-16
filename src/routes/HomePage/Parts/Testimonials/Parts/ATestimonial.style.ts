/** @format */

import { ATitle } from "components/ATitle/ATitle";
import { styled } from "styled-components";
import img from "assets/icons/fieldOpinion.svg";
import { WIDTH_L } from "globalStyles";

export const StyledContext = styled.div<{ $widthItem: number }>`
	width: ${({ $widthItem }) => `${$widthItem}px`};
`;

export const StyledTestiField = styled.div`
	background-image: url(${img});
	background-size: 520px 230px;
	background-repeat: no-repeat;
	min-height: 220px;
	min-width: 480px;

	padding: 20px 0 0 20px;

	@media screen and (max-width: ${WIDTH_L}) {
		background-size: 350px 170px;
		min-height: 140px;
		min-width: 315px;
	}
`;

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
