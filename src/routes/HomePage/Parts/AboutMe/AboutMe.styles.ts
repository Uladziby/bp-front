/** @format */

import { styled } from "styled-components";
import { ATitle } from "components/ATitle/ATitle";
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import background from "assets/images/bg_kat.jpg";

export const StyledATitle = styled(ATitle)`
	text-align: justify;
	padding: 0 5rem;

	color: ${({ theme }) => theme.colors.mauve12};
`;

export const StyledAMotionSection = styled(AMotionSection)`
	display: flex;
	justify-content: center;
	padding: 0 0 15rem;
`;

export const StyledPhoto = styled.div`
	display: flex;
	justify-content: center;
	background-image: url(${background});
	min-height: 600px;
	width: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	padding: 0;
`;
