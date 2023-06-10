/** @format */

import { styled } from "styled-components";
import { ATitle } from "components/ATitle/ATitle";
import { motion } from "framer-motion";
import { AMotionSection } from "components/AMotionSection/AMotionSection";

export const StyledAMotionSection = styled(AMotionSection)`
	display: flex;
	flex-direction: row;
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

export const StyledBlock = styled(motion.div)`
	display: flex;
	flex: 1;
	flex-direction: column;
	max-height: 600px;
`;
