/** @format */

import { styled } from "styled-components";
import { ATitle } from "components/ATitle/ATitle";
import { ASection } from "components/ASection/ASection";

export const StyledASection = styled(ASection)`
	background-color: ${({ theme }) => theme.colors.gray2};
`;

export const AboutMePhoto = styled.img`
	object-fit: cover;
	width: 100%;
	max-height: 600px;
`;

export const StyledATitle = styled(ATitle)`
	display: flex;
	color: ${({ theme }) => theme.colors.mauve12};
`;

export const StyledBlock = styled.div`
	flex: 1;
	max-height: 600px;
`;
