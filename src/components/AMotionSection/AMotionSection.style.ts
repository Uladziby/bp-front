/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledContainer = styled(motion.section)`
	display: flex;
	padding: 3rem 5%;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.gray2};
`;
