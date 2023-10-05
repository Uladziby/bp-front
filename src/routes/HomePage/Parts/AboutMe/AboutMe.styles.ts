/** @format */

import { styled } from "styled-components";
import { ATitle } from "components/ATitle/ATitle";
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import background from "assets/images/bg_kat.jpg";
import { WIDTH_S } from "globalStyles";

export const StyledATitle = styled(ATitle)`
	text-align: justify;
	padding: 2rem 5rem;

	color: ${({ theme }) => theme.colors.mauve12};
	max-width: 1000px;
<<<<<<< HEAD

	@media screen and (max-width: ${WIDTH_S}) {
		font-size: 14px;
	}
=======
>>>>>>> 43ae4ca (refactor: optimizing images)
`;

export const StyledAMotionSection = styled(AMotionSection)`
	display: flex;
	justify-content: center;
	padding: 0 0 5rem;
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
	padding: 0 0 5rem 0;
`;
