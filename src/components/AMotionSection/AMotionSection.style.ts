/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledContainer = styled(motion.section)`
	display: flex;
	padding: 5rem 5%;
	flex-direction: column;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.gray2};
`;

export const StyledContent = styled(motion.div)`
	width: inherit;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
