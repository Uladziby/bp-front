/** @format */

import { styled } from "styled-components";
import { ATitle } from "components/ATitle/ATitle";
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import background from "assets/katrix_1.jpg";
import { WIDTH_L } from "globalStyles";

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
	flex-direction: row;
	margin-top: 5rem;
	padding: 10rem 0%;

	& > div {
		@media screen and (max-width: ${WIDTH_L}) {
			flex-direction: column;
		}
	}
`;

export const StyledAboutMePhoto = styled(AboutMePhoto)`
	width: 40%;

	background-image: url(${background});
`;
