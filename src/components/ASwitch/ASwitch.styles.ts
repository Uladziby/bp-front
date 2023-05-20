/** @format */

import "@radix-ui/colors/blackA.css";
import { Root, SwitchThumb } from "@radix-ui/react-switch";
import styled from "styled-components";

export const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	svg {
		color: ${(props) => props.theme.colors.indigo11};
	}
`;

export const StyledLabel = styled.label`
	padding-right: 15px;
	font-size: 15px;
	line-height: 1;
	color: ${(props) => props.theme.colors.indigo11};
`;

interface SwitchRootProps {
	checked?: boolean;
}

export const StyledRoot = styled(Root)<SwitchRootProps>`
	width: 44px;
	height: 24px;

	background-color: ${(props) => props.theme.colors.indigo12};
	border-radius: 9999px;
	position: relative;
	box-shadow: 0 2px 10px var(--blackA7);
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	border-width: 1px;
	cursor: pointer;

	&:focus {
		box-shadow: 0 0 0 2px black;
	}
`;

export const StyledThumb = styled(SwitchThumb)`
	display: block;
	width: 21px;
	height: 21px;
	background-color: ${(props) => props.theme.colors.indigo11};
	border-radius: 9999px;
	box-shadow: 0 2px 2px var(--blackA7);
	transition: transform 100ms;
	transform: translateX(2px);
	will-change: transform;

	&[data-state="checked"] {
		transform: translateX(19px);
	}
`;
