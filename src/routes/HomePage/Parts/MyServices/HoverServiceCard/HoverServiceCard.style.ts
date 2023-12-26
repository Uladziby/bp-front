/** @format */

import { Content } from "@radix-ui/react-hover-card";
import styled from "styled-components";

export const StyledHoverCard = styled(Content)`
	border-radius: 6px;
	padding: 20px;
	width: 300px;
	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	animation-duration: 400ms;
	animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
	will-change: transform, opacity;

	background-color: ${(props) => props.theme.colors.gray5};
`;
