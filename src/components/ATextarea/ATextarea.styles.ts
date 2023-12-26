/** @format */

import styled from "styled-components";
import { COLOR_PALETTE, INPUT_COLORS } from "utils/colors";

export const StyledWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	height: 100%;
	margin: 1rem 2rem;
`;

export const StyledLabel = styled.label`
	cursor: pointer;
	text-align: left;
	color: ${INPUT_COLORS.default};
	font-size: 14px;
`;

export const StyledTextarea = styled.textarea<{ $hasError?: boolean }>`
	margin: 8px 0;
	height: 100%;
	line-height: 22px;
	padding: 1rem;
	padding-right: ${({ $hasError }) => $hasError && 34}px;
	resize: none;
	border: 1px solid ${INPUT_COLORS.default};
	border-radius: 4px;

	&:focus {
		box-shadow: 0px 0px 0px 1px ${INPUT_COLORS.default} inset;
		outline: none;
	}

	&:focus::placeholder {
		color: transparent;
	}
`;

export const StyledErrorIcon = styled.div`
	position: absolute;
	top: 50%;
	right: 12px;
	transform: translateY(-50%);
`;

export const StyledCounter = styled.span`
	align-self: flex-end;
	font-size: 12px;
	color: ${COLOR_PALETTE.gray900};
`;

export const StyledErrorMessage = styled.div`
	width: 100%;
	text-align: left;
	color: ${INPUT_COLORS.error};
	font-size: 12px;
`;
