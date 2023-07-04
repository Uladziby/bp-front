/** @format */

import { styled } from "styled-components";
import { ATitle } from "components/ATitle/ATitle";
import { AMotionSection } from "components/AMotionSection/AMotionSection";

export const AboutMePhoto = styled.img`
	object-fit: cover;
	width: 100%;
	max-height: 600px;
`;

export const StyledATitle = styled(ATitle)`
	display: flex;
	width: 60%;
	color: ${({ theme }) => theme.colors.mauve12};
`;

export const StyledAMotionSection = styled(AMotionSection)`
	display: flex;
`;

export const StyledAboutMePhoto = styled(AboutMePhoto)`
	width: 40%;
`;
