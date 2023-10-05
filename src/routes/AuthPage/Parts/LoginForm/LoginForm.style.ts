/** @format */

import { AButton } from "components/AButton/AButton";
import { AForm } from "components/AForm/AForm";
import { AInput } from "components/AInput/AInput";
import styled, { css } from "styled-components";
import { StrengthType } from "./type";

const variant = {
	weak: css`
		background: #e24c71;
		width: 33.33%;
	`,
	medium: css`
		background: #f39845;
		width: 66.66%;
	`,
	strong: css`
		background: #57c558;
		width: 100%;
	`,
};

export const StyledCard = styled.div`
	width: 400px;
	padding: 60px 30px 32px;
	border-radius: 1.25rem;
	background: #ffffff;
	text-align: center;
	transition: 0.4s;
`;

export const StyledAButton = styled(AButton)`
	padding: 0 16px;
	border: 0;
	font-size: 1.5rem;
	font-weight: 600;
	text-align: center;
	letter-spacing: 2px;
	transition: all 0.375s;
	cursor: pointer;
`;

export const StyledForm = styled(AForm)`
	width: 100%;
	margin: 0;
	display: grid;
`;

export const StyledInput = styled(AInput)`
	& > input {
		border: 1.5px solid #dfe1f0;
		outline: none;

		padding: 10px 16px;
		background: #f6f7ff;
		color: inherit;
		border-radius: 6px;
		font-family: inherit;
		text-align: left;
		font-size: 2rem;
		transition: 0.4s;
	}

	&::placeholder {
		color: #9d9fbd;
	}
`;

export const StyledStrengthBar = styled.div<{ $strength: StrengthType }>`
	margin: 8px 16px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	gap: 8px;
	height: 6px;
	border-radius: 3px;

	& > div {
		height: 6px;
		border-radius: 3px;
		transition: 0.4s;
		width: 0%;

		${({ $strength }) => ($strength ? variant[$strength] : "")};
	}
`;

export const StyledStrengthText = styled.div`
	padding: 0px 26px;
	text-align: left;
`;
