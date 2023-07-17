/** @format */

import { AButton } from "components/AButton/AButton";
import { AMotionSection } from "components/AMotionSection/AMotionSection";
import { ATitle } from "components/ATitle/ATitle";
import { styled } from "styled-components";

export const StyledAMotionSection = styled(AMotionSection)`
	background-color: ${({ theme }) => theme.colors.gray3};
`;

export const StyledAButton = styled(AButton)`
	color: ${({ theme }) => theme.colors.gray11};
	gap: 1rem;
	margin: 0 20px;
`;

export const StyledContainer = styled.div`
	padding: 2rem 1rem;
	background-color: ${({ theme }) => theme.colors.gray4};
`;

export const StyledBlock = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledATitle = styled(ATitle)`
	max-width: 200px;
	color: ${(props) => props.theme.colors.indigo11};
`;
