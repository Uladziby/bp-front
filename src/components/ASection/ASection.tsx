/** @format */

import { ReactNode } from "react";
import { StyledATitle, StyledContainer, StyledContext } from "./ASection.styles";

interface ASectionProps {
	children: ReactNode;
	title?: string;
	className?: string;
}

export const ASection = ({ children, title, className }: ASectionProps) => {
	return (
		<StyledContainer className={className}>
			<StyledATitle size={32} weight={700} lineHeight={36}>
				{title}
			</StyledATitle>
			<StyledContext> {children}</StyledContext>
		</StyledContainer>
	);
};
