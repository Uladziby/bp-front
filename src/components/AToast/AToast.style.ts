/** @format */

import { Root } from "@radix-ui/react-toast";
import { ATitle } from "components/ATitle/ATitle";
import { styled } from "styled-components";

export const StyledContext = styled(ATitle)`
	display: flex;
	gap: 1rem;
	justify-content: center;
	align-items: center;

	& > svg {
		fill: ${({ theme }) => theme.colors.mauve12};
	}
`;

export const StyledContent = styled(Root)`
	display: flex;
	align-items: center;
	justify-content: center;

	color: ${({ theme }) => theme.colors.indigo11};
`;
