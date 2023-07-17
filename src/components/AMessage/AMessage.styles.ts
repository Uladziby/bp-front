/** @format */

import styled from "styled-components";
import { COLOR_PALETTE } from "utils/colors";

const { error, gray150, gray900 } = COLOR_PALETTE;

export const StyledContainer = styled.strong<{ type: string }>`
	display: block;
	text-align: left;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	color: ${({ type }) => (type === "error" ? error : gray900)};
	background-color: ${({ type }) => (type === "error" ? "transparent" : gray150)};
	padding: ${({ type }) => (type === "error" ? "0" : "8px 12px")};
`;
