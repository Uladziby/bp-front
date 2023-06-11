/** @format */

import { ASection } from "components/ASection/ASection";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const StyledASection = styled(ASection)`
	background-color: ${({ theme }) => theme.colors.gray3};
`;
