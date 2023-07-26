/** @format */

import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledContainer = styled(motion.section)`
	display: flex;
	padding: 14rem 5rem;
	flex-direction: column;
	gap: 1rem;
	background-color: ${({ theme }) => theme.colors.gray2};

	@media screen and (max-width: 768px) {
		padding: 10rem 2rem;
	}
`;

export const StyledContent = styled(motion.div)`
	width: inherit;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
